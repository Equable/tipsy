Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :map, only: [:show]
      resources :auth, only: [:index]
      resources :liquor_part, only: [:create, :destroy]
      resources :search, only: [:create]
      resources :cocktail, only: [:create, :show] do
        get :liquor_parts
      end
      resources :liquor, only: [:new, :create] do
        get :spirit_subtypes
      end
      resources :spirit_subtype, only: [:new, :create]
      resources :other_ingredient, only: [:create, :destroy]
      resources :cocktail_review, only: [:show, :create, :destroy, :update]
      post 'datalist/liquors', :to => 'liquor_part#liquor_datalist'
    end
  end
  get '*path', to: 'homes#index'
end
