Rails.application.routes.draw do
  # STEP 1 - we receive a request from the browser
  # user types in "localhost:3000/sushis" and hits enter
  # we are saying, if a user makes a get request to /sushis
  # handle that request with the sushis controller index method
  # we can optionally name a path helper to use other places in our code
  # its easier to type "sushis_path" than "localhost:3000/sushis"

  # HTTP VERB  RESOURCE     CONTROLLER#method    PATH HELPER
           get "/sushis", to: "sushis#index", as: "sushis"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
