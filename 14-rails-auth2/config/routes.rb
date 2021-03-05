Rails.application.routes.draw do
  get "/login", to: "users#login", as: "login"
  post "/handle_login", to: 'users#handle_login'
  
  delete "/logout", to: "users#logout"
  
  resources :places
  resources :visits
  resources :users

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
