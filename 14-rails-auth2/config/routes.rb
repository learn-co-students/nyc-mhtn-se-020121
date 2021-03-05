Rails.application.routes.draw do
  resources :visits
  resources :places
  get "/login", to: "users#login", as: "login"
  post "/handle_login", to: 'users#handle_login'
  
  resources :users

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
