Rails.application.routes.draw do
  resources :visits, only: [:new, :create]
  # resources(:visits, {only: [:new, :create]}) <- alternative syntax
  # resources :people <- we are not using this at all
  # resources :places
  # byebug

  # ^ resources creates all of the below:
  get '/places', to: 'places#index', as: 'places'
  get '/places/new', to: 'places#new', as: 'new_place'
  post '/places', to: 'places#create'
  get '/places/:id', to: 'places#show', as: 'place'
  get 'places/:id/edit', to: 'places#edit', as: 'edit_place'
  patch 'places/:id', to: 'places#update'
  delete 'places/:id', to: 'places#destroy'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
