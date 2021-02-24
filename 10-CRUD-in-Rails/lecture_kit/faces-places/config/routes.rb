Rails.application.routes.draw do

  get "/places/:id", to: "places#show", as: "place"
  get "/places", to: "places#index", as: "places"
end
