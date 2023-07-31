Rails.application.routes.draw do
  resources :vehicles
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get "/search", to: 'products#search_products'
  post "/search", to: 'products#search_products'
end
