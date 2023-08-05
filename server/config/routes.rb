Rails.application.routes.draw do
  resources :home_products
  resources :electronics
  resources :fashions
  resources :deals
  resources :search_histories
  resources :customers
  resources :vehicles
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/auth', to: 'customers#show'
  get "/search", to: 'products#search_products'
  post "/search", to: 'products#search_products'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get "/my-history", to: "customers#my_history"

end
