Rails.application.routes.draw do
  resources :books do
    get :search, on: :collection
    get :form_only_for_stimulus, on: :collection
    get :list_all, on: :collection
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "books#index"
end
