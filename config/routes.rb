Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :firms, except: [:new, :edit]
    resources :contacts, except: [:index, :show, :new, :edit]
    resources :finances, except: [:index, :show, :new, :edit]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
