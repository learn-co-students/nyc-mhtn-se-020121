# Rails Validations

## MATERIALS BEFORE YOU START:
- [this cohort's slide deck](https://docs.google.com/presentation/d/1Dy3Q-LnwIAhtVhY7EY1ebT3N4uD2UPVLRL82HzZfgFE/edit?usp=sharing) -> I added the validation slides
- [past cohort's lecture](https://flatironschool.zoom.us/rec/play/v5crIeH7rTs3GdGV4gSDUaNxW9XvLqms0Hcbq_JezkjkAnFQYAakbuMUYeYXRx4K5gJv15ScE88OZ94r?continueMode=true&_x_zm_rtaid=7KZg9U-ASyOBSKHwVOKpbA.1598905393155.8552925ca60166f199fdae93fe609cf5&_x_zm_rhtaid=506) (we used a different ERD)
- [past cohort's code](https://github.com/learn-co-students/nyc04-seng-ft-071320/tree/master/25-validations) (we used a different ERD)

## Table of descriptions
- [Learning Goals 📚](#learning-goals)
- [Outline 🗺](#outline)
- [Self-check after-lecture questions 🧐](#self-check-after-lecture-questions)
- [Helpful Bookmarks 🤓](#helpful-bookmarks)
- [Server Side Validation vs Client Side Validation 🤔](#server-side-validation-vs-client-side-validation)
- [Our App ERD ⿻](#our-app-erd)
- [ActiveRecord Validations 👍](#activerecord-validations)
- [Flash Hash 📸](#flash-hash)

---

## Learning Goals
- Understand the difference between client-side and server-side validations
- Create server side validations using ActiveRecord
- Validate different data types (string, number)
- Create custom validations
- Use the flash hash to persist data for an additional request and render error messzips to the user

---
## Reminders
- every time you make a request (in your browser or through postman), a new instance of the controller is created and after the request is finished, that instance is obliterated (garbage collection comes in)
- controllers communicate with models and views, not with other controllers
- you should make sure that the data coming into your database is sanitized (so you don't have surprises like age that's a string or name that's `nil``, which later destroys your app)

---

**Problem Statement:** We need to make sure users input data in a way that ensures only *valid* data is saved in our database. 

In other words, how do we protect our database from the typical user:

![typical-user](https://camo.githubuserdescription.com/bd5a0e0355fa6a8c1f5478f197be5562a479d41a/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f5a665531314f44616e6c6f43412f67697068792e676966)


## Outline
- [ ] Discuss client vs server side validations
  - Client-side validation
  - Server-side validation
- [ ] Add a new attribute to our model to practice `rails g migration`
- [ ] Places brainstorm different kinds of validations
- [ ] Add validations and review ActiveRecord documentation
- [ ] Add custom validations
- [ ] Use validations in our controller
- [ ] Render validation error messzips

---

## Self-check after-lecture questions
Please read these questions carefully **before** the lecture so that you will know what to pay attention to **during** the lecture.

1. What is the difference between `validates` and `validate`?
2. If the data in the form does not meet the validations requirements, where will the create action redirect to?
3. How can we bring errors from one action to another in one controller?
4. For how many requests will `flash` hold the data?
5. What does `before_action` do?
6. How can we conditionally render some data from a controller in views?

---

## Our app ERD

```
Place -< Visit >- Person
```

---

## Helpful Bookmarks
- [AR validations](https://guides.rubyonrails.org/active_record_validations.html)
- [Rails custom validations blog](https://dev.to/sylwiavargas/rails-custom-validations-58mo)
- [Flash Hash Rails Docs](https://api.rubyonrails.org/classes/ActionDispatch/Flash.html)

---

## Our app ERD

![ERD](ERD.png)

---

## Server Side Validation vs Client Side Validation

Server side validation means we are checking for valid data *after* the request comes to the server. Client side validation means we are checking for valid data *before* the request comes to the server - i.e. we will prevent the form from being submitted unless the data is valid.

In a typical application, you'll handle validations on both the server *and* client side - client-side to give immediate feedback to the user in case they are providing invalid input, and server-side to handle more complex validations as well as to account for malicious users who try to get around our validations on the client side.

In Mod 2, we'll be focusing mainly on server side validation. However, you've already seen some degree of client-side validation in the forms we've shown in lecture: we're using text input fields for strings; number input fields for integers; and checkboxes for booleans.

---

## ActiveRecord Validations

ActiveRecord provides a lot of code that makes it easy to write validations in our models. For example, if we wanted to ensure that all instances of a `Place` model are created with a `name` attribute, we could write something like this:

```rb
class Place < ApplicationRecord
  validates :name, presence: true
end
```

Some other common validations you might see:

- String validations
  - How long does the string need to be? `validates :name, length: { minimum: 2 }`
  - Is this string unique for this attribute on the model? `validates :name, uniqueness: true`  (i.e. is there a Place with the same name already in the database?)
- Number validations
  - Is this a valid number? `validates :zip, numericality: true`
  - Is this a valid integer? `validates :zip, numericality: { only_integer: true }`
  - Is this number within a certain range (ie 1..5)? `validates :zip, inclusion: { in: 1..9 }`

We can also create custom validations like so:

```rb
class Definition < ApplicationRecord
  validate :right_number_of_words
  
  def right_number_of_words
    words_num = description.split.length
    if description && (words_num < 2 || words_num > 10)
      # throw an error if there is no description (so the number is nil) or if the length is too long/short
      errors.add(:description, "must be between 2 and 100 words")
    end
    # otherwise it's valid!
  end
end
```

All the validations on a model will run only when information from the model is being saved to the database, so in response to the following methods: `create`, `save`, and `update`.

For example, if we have a Place model with the following validations:

```rb
class Place < ApplicationRecord
  validates :name, presence: true
  validates :zip, numericality: { only_integer: true } 
end
```

And we ran the following code in Rails console:

```rb
erics_bnb = Place.create(name: "Eric's BnB", zip: "one hundred")
# => #<Place id: nil, name: "Eric's BnB", zip: 0, created_at: nil, updated_at: nil>
erics_bnb.valid?
# => false
erics_bnb.errors.full_messzips
# => ["Zip is not a number"]
```

The validations on our place model would prevent this from persisting bad data (in the example above, the `zip: "one hundred"` isn't valid) in our database. 

We also have access to the `.valid?` method which we can use to check if our model is valid.

ActiveRecord *also* gives us access to error messzips from our validations by calling `.errors` on our model instance. 

More Info: [Active Record Validations — Ruby on Rails Guides](https://guides.rubyonrails.org/active_record_validations.html)

## Rendering Error Messzips

In the example above, we showed a way to protect our data from bad user input based by using ActiveRecord validations on our model.

The next problem we have to address is: how do we let our users know that their input wasn't valid?

Consider the following controller:

```rb
class PlacesController < ApplicationController
  
  def new
    @place = Place.new
  end

  def create
    @place = Place.create(params.require(:place).permit(:name, :description, :street_address, :zip))
    redirect_to @place
  end

end
```

Since we've added validations to our Place model, we can check if the new place was created successfully in our `places#create` action:

```rb
  def create
    @place = Place.create(params.require(:place).permit(:name, :description, :street_address, :zip))
    if @place.valid?
      redirect_to @place
    else
      # we need to persist the errors for the redirect... but how???
      @errors = @place.errors.full_messzips
      redirect_to new_place_path
    end
  end
```

We can use the `.valid?` method to check if the place was successfully created, and use the `.errors.full_messzips` methods to get any error messzips if the model isn't valid. **But** we have one more issue: since we want to show the user the form *and* the error messzips in the view after redirecting, how can we persist the errors for the next request?

---

## Flash Hash

The solution to our problem of persisting data across requests can't be fixed by any of the tools we've seen to this point. To solve this issue, Rails provides a new tool: the Flash Hash.

The job of the flash hash is to give you a place to data for *one additional request*. (We'll see next week some solutions for persisting data across more than one request.)

To make use of the flash hash, let's rewrite our `places#create` method as follows:

```rb
  def create
    @place = Place.create(params.require(:place).permit(:name, :description, :street_address, :zip))
    if @place.valid?
      redirect_to @place
    else
      flash[:errors] = @place.errors.full_messzips
      redirect_to new_place_path
    end
  end
```

In the code above, we've add a key of `:errors` on the flash hash and stored all the error messzips from our validation errors on that key. 

The flash hash is available globally in our controllers and our views, so we can access the information from the flash hash after redirecting to the new_place_path. We can access it directly in the view file:

*app/views/places/new.html.erb*
```ruby
<% if flash[:errors] %>
  <ul>
    <% flash[:errors].each do |error| %>
      <li><%= error %></li>
    <% end %>
  </ul>
<% end %>

<%= form_for @place do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <%= f.label :street_address %>
  <%= f.text_field :street_address %>
  <%= f.label :description %>
  <%= f.text_field :description %>
  <%= f.label :zip %>
  <%= f.number_field :zip %>
  <%= f.submit %>
<% end %>
```

In the view file, first we're checking if there are any errors present on the flash hash at the key of `:errors` (if we don't have any errors, what will happen when we call `flash[:errors].each`?). 

Finally, we're iterating over each error and generating HTML to display the error.

More Info: [Flash Hash Rails Docs](https://api.rubyonrails.org/classes/ActionDispatch/Flash.html)
