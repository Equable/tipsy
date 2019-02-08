Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :search, only: [:create]
      resources :cocktail, only: [:create, :show]
      resources :liquor, only: [:new, :create] do
        get :spirit_subtypes
      end
      resources :spirit_subtype, only: [:new, :create]
    end
  end

  get '*path', to: 'homes#index'
end
