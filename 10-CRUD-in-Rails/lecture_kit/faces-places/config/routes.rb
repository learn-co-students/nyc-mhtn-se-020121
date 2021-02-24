Rails.application.routes.draw do
  # route to see the whole list
  get "/places", to: "places#index", as: "places"

  # routes for creating a new instance
  get "/places/new", to: "places#new", as: "new_place"
  post "/places", to: "places#create"

  # route to see a page of a place
  get "/places/:id", to: "places#show", as: "place"

  # routes for updating an instance
  get "/places/:id/edit", to: "places#edit", as: "edit_place"
  patch "/places/:id", to: "places#update"

  get "/hello", to: "places#hello"
end
