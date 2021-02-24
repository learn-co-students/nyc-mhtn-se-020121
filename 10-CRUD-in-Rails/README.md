# CRUD in Rails

## Table of contents
- [Learning Goals 📚](#learning-goals)
- [Self-check after-lecture questions 🧐](#self-check-after-lecture-questions)
- [Outline 🗺](#outline)
- [Helpful Bookmarks 🤓](#helpful-bookmarks)
- [CRUDopus 🐙](#crudopus)
- [Rails process for new actions 🌮](#rails-process-for-new-actions)
- [Rails Commands Reference 👾](#rails-commands-reference)
- [Controller and Routes Reference 🕹](#controller-and-routes-reference)
  - [Controller](#controller)
  - [Routes](#routes)


## Learning Goals
- Explain how routes in Rails interact with the controller
- Use ActionView helpers like `link_to`, `button_to` and `form_for` to help write HTML
- Use **strong params** to allow creating/updating models with mass assignment
- Create, Update and Delete with Rails

---

## Outline
- [ ] Work on CRUD, focus on routes and ActionView helpers
  - [ ] Read
    - [ ] Review `link_to` and path helpers
  - [ ] Create
    - [ ] HTML form vs `form_for`
    - [ ] Strong Params
  - [ ] Update
    - [ ] reusable `form_for`
  - [ ] Delete
    - `button_to`

---

## Self-check after-lecture questions
Please read these questions carefully **before** the lecture so that you will know what to pay attention to **during** the lecture.

1. How many arguments does the `link_to` method take in? What are these arguments?
2. What is a path helper?
3. Why `places_path` does not need an `id` but `place_path` needs one?
4. Why are there two routes needed for creating a new instance?
5. Why do we redirect?
6. What are two ways Rails prevents our app from getting hacked?
7. What method does `button_to` default to?

---

## Helpful Bookmarks
- [slide deck](https://docs.google.com/presentation/d/1Dy3Q-LnwIAhtVhY7EY1ebT3N4uD2UPVLRL82HzZfgFE/edit?usp=sharing)
- [restular](http://www.restular.com/)

---

## CRUDopus

![Diagram](REST-CRUDopus-Diagram.png)

--- 

## Rails process for new actions
1. new route
2. add action in the controller
3. add a view
4. test it manually online

---

## Rails Commands Reference
* `rails new <app-name>` - create a new Rails app
* `rails c` - open a console
* `rails s` - start server
* `rails g migration <migration-name> <attribute:data-type> <attribute:data-type>` - generate a migration
* `rails g model <model-name> <attribute:data-type> <attribute:data-type>` - generate a model and a migration to create the table with specified columns
* `rails g controller <model-name-pluralized>` - generate a controller
* `rails routes` - display all the routes in your app, also can viewed at http://localhost:3000/rails/info/routes
* `rails db:migrate` - run all pending migrations (same as `rake db:migrate` in Mod 1)

---

## Controller and Routes Reference

### Controller
```ruby
class PlacesController < ApplicationController

  # get '/places'
  def index
    # digesting the request: checking in with the model to get the place array
    @places = Place.all
    # response: render an index view
    render :index
  end

  # get '/places/new'
  def new
    # digesting the request: creating an empty template for the form
    @place = Place.new
    # response: render new form view
    render :new
  end
  
  # post '/places'
  def create
    # digesting the request: going through the params hash and checking in with the model to create a new instance
    place_params = params.require(:place).permit(:first_name, :age, :last_name)
    @place = Place.create(place_params)
    # response: redirect to the '/places', which will trigger the index action
    redirect_to places_path
  end

  #get '/places/:id/
  def show
    # digesting the request: finding a place in a model
    @place = Place.find(params[:id])
    # response: render show view
    render :show
  end

  # get '/places/:id/edit'
  def edit
    # digesting the request: crompiling data for the form from the model
    @place = Place.find(params[:id])
    # response: render edit form view
    render :edit
  end

  # patch '/places/:id'
  def update
    # digesting the request: going through the params hash and checking in with the model to update a the instance
    @place = Place.find(params[:id])
    place_params = params.require(:place).permit(:first_name, :age, :last_name)
    @place.update(place_params)

    # response: redirect to the '/places/:id', which will trigger the show action
    redirect_to place_path(@place)
  end

  # delete '/places/:id"
  def destroy
    # digesting the request: checking in with the model to find a place instance and destroy it
    @place = Place.find(params[:id])
    Place.destroy(params[:id])
    #response: redirect to the index page
    redirect_to places_path
  end

end
```

### Routes

```ruby
    get '/places', to: 'places#index', as: 'places'
    get '/places/new', to: 'places#new', as: 'new_place'
    post '/places', to: 'places#create'
    get '/places/:id', to: 'places#show', as: 'place'
    get 'places/:id/edit', to: 'places#edit', as: 'edit_place'
    patch 'places/:id', to: 'places#update'
    delete 'places/:id', to: 'places#destroy'

    # or, if you will have all seven routes or don't want to practice the syntax:
    # resources :places
    # resources :places, only: [:index, :show]
```