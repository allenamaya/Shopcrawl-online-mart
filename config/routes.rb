Rails.application.routes.draw do
  resources :posts
  
  get 'clients/new' 
  resources :clients, only: [:new, :create]

  get 'sessions/new'
  get 'sessions/destroy'
  resource :sessions, only: [:create]
  
   resources :searches, only: [:new, :create, :show]
end
