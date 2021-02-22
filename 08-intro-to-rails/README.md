Intro to the Internet
===
* What will you get out of this Mod?

## Introduction to the Internet

* What is the difference between the Internet and the Web?
  * https://en.wikipedia.org/wiki/ARPANET
  * https://en.wikipedia.org/wiki/Vint_Cerf (TCP)
  * https://en.wikipedia.org/wiki/Tim_Berners-Lee (HTML/HTTP)
  * http://info.cern.ch/hypertext/WWW/TheProject.html

* How is data sent over the internet?

* How can I find out the IP address of www.google.com using a terminal command? What kind of server makes this lookup possible?
  * DNS (Domain Name System)
  * `nslookup`/Network Utility

* What is a server? What is a client?

My computer (client) communicates to Reddit's computer (server)

HTTP(HyperText Tranfer Protocol) Methods/Verb:
- POST: Create
- GET: Read 
- PUT/PATCH: Update
- DELETE: Delete

HTTP Response (headers/body):
- BODY: HTML Document (HyperText Markup Language)
- HEADERS: Metadata about the response


* What is the request / response cycle?

* With a client and server, which makes the request? Which sends the response?

* What is a HTTP request? Make a few, using at least two of these tools: Google Chrome, Postman, curl

* What are the parts of a HTTP request
  * Use a web browser to find the headers for an HTTP request. What do you think these headers do?
  * What is usually in the body of an HTTP _response_?
  * What is a HTTP status code? What do the codes 200, 404, 500, 503, 302, 422 and 418 mean?
  * Why do we use HTTP verbs? What is the difference between what GET, POST, PUT, PATCH, and DELETE requests do?

* What's the difference between static and dynamic websites? What are some of the benefits of a dynamic website?



## Rails

On the command of the parent directory where you want your app to go:

```sh
rails new dinosaurs-app
cd dinosaurs-app
```

Let's look at the contents of this folder (using `ls`), and take a look at the files and folders that were magically created by the `rails new` command:

```
├── app
├── bin
├── config
├── db
├── lib
├── log
├── public
├── test
├── tmp
└── vendor
```

Some details about this structure:

* 90% of the web app code will be inside the folder `app`, including all of our model, view, and controller logic.
* `config` contains all the credentials for the DB and other 3rd party services, all the deployment settings, and the specs about how to serve this app over HTTP.
* `db` will contain all of your migrations

We will describe the other folders in later lessons, and for the next couple of weeks, you will primarily write code inside the folders described above.

```ruby
rails db:migrate # <-- this might be `rake db:migrate` if you're using <= rails v. 4.2
rails server
```

Now we'll head over to `localhost:3000/dinosaurs`. All of our REST actions are live!
We didn't use a resource generator in lecture, but it provides us with a model, migration, controller, and routes. It does not populate the controller actions for us, though. We also get some auto-generated .coffee and .scss files as well, which we likely won't use, at least for now. So we can delete those.

Rails follow a pattern called **"convention over configuration"** - this means that by default, a Rails app expects you to follow specific patterns and folder structures. This means you need to learn these conventions, but also means that once you learn them, you save time by not having to setup a lot of the configuration you'd otherwise need to set up manually.

This structure may look a bit complex – there a lot of files, specific naming conventions, and some nested files and folders. We generally don't create this structure manually, but instead use the Rails command line tool, which initializes the app for us:

> **Note:** By default, if you _do not_ add any option for the database, Rails will create the app with SQLite3. While you are working in a local development environment (localhost), you won't notice much of a difference between SQLite3 and PostgreSQL.

> Once your app is in production on a remote server, you will _not_ use SQLite, and they will often use PostgreSQL. A best practice in web development is to keep development and production environments as similar as possible, so we recommend using PostgreSQL from the start.

#### Rails Routing vs. Sinatra Routing

As you know, a "route" is a combination of **the path** that was requested and **the HTTP verb** that was used to request that path.

```
                                          -----> Model <----> DB
                                         |         |
            response        request      |         |
   Browser <-------- router -------> controller <--
                             GET         ^
                             PUT         |
                             POST         -----> view <----> html/images/css/js
                             DELETE
```

When we've used Sinatra, we were managing the routes and the code executed for a specific route in the same place:

```ruby
	get "/dinosaurs" do
		# Here is the code that will be executed when the client requests /dinosaurs
	end
```

This is handy for us as developers, because it allows us to keep everything in the same place - routing and controller logic - but if the app grows it can get unreadable. Imagine, for example, an app that has 20 or 30 different routes... your main routes file could contain a lot of complex code.

Rails has a "routing engine" that separates the routing logic from the controller logic (what we want to happen when routes are requested). The configuration for this routing engine is in the file `config/routes.rb`.

```ruby
Rails.application.routes.draw do

end
```

Everything between the `do` and the `end` will be code related to handling routes for the current application.

![](https://www.wikitechy.com/tutorials/ruby-on-rails/img/ruby-on-rails-images/mvc-routing-ruby-on-rails.png)

#### Generate a controller

As Rails is an MVC framework, we will need to have controllers to handle requests and call the database through models.

In Rails, the controllers are files inside the folder `app/controllers`. If you open this folder, you will see that one controller is already here: the file `application_controller.rb`. This controller does not directly handle HTTP requests, but rather serves as a link between all the controllers we will create, `application_controller.rb` will be the parent of all the controllers in our app.

There is 3 different ways for creating a controller in Rails:

1. We can manually create a file and write the ruby code inside it.

2. We can use a generator called `controller`, using `rails g controller CONTROLLER_NAME [ACTIONS]`. For instance, if we want to create a controller for the resource `dinosaurs` with an action and a view for `index` and `show`, we would type in the console `rails g controller dinosaurs index show`. This command would create a bunch of files and modify some others:

   * The controller itself, `dinosaurs_controller.rb` inside `app/controllers`
   * The views for each method , in this case
     * `app/views/index.html.erb`
     * `app/views/show.html.erb`
   * The routes handlers for these two actions will also be added to config/routes.rb :
     * `get '/dinosaurs/index', to: 'dinosaurs#index'`
     * `get '/dinosaurs/show', to: 'dinosaurs#show'`

3. We can use the `resource` generator. This generator will create the same files as the previous generator as well as the model and migration.

#### Create methods for a RESTful controller

We've already defined what a RESTful resource is, let's see how to implement it in a rails app.

As a reminder, a RESTful resource will include 7 methods:

* Index
* Show
* New
* Create
* Edit
* Update
* Delete

#### Create Views

There is no specific generator that will create only a view file, but you can add them manually into the appropriate folder inside views.

For instance, if we want to add a view file `about` for the resource `Dinosaur`, we can create a file `about.html.erb` in `app/views/dinosaurs`.

If a view is "static" - as in, it doesn't use any instance variables created in the controller - you can just create a route for this view and rails will render it in the browser even if there is no method in the controller:

In config/routes.rb

```ruby
get "/dinosaurs/about", to: 'dinosaurs#about'
```

If there is a file `about.html.erb` in `app/views/dinosaurs`, this file will be automatically rendered when you call `localhost:3000/dinosaurs/about`

#### Implicit vs Explicit Rendering

Thanks to Rails conventions, we do not need to specify the view file to render in our controller. This is known as implicit rendering

In app/controllers/dinosaurs

```ruby
  def index
  end
```

However, if we wanted to be more explicit or if we wanted to render a view template that does not correspond with the action name we could do the following:

```ruby
  def index
    render 'cats'
    # This will render cats.html.erb
  end
```

#### Generate a model

Sometimes, you will need a model but not the related controller, in this case, you will use the model generator:

```
rails g model MODEL_NAME [fields]
```

This will generate the model by itself along with the migration containing all the fields and the data types if you wrote them when you typed the console.

#### Generate a migration

In Sinatra you had to create your migrations by hand. As with most things in Rails, theres an generator for that.

```ruby
rails g migration AddAgeToDinosaurs age:integer
```

By following certain conventions like the one above, rails will generate a migration that specifically adds the age column to your existing dinosaurs column.

```ruby
class AddAgeToDinosaur < ActiveRecord::Migration[5.1]
  def change
    add_column :dinosaurs, :age, :integer
  end
end
```

#### Conclusion

Rome wasn't built in a day and neither can someone learn Rails in a day. Keep coding and it will all come together.

[Rails Guides](http://guides.rubyonrails.org/index.html)