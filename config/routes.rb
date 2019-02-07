Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  
  namespace :api do
    namespace :v1 do
      resources :search, only: [:create]
    end
  end
end
