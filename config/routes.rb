Rails.application.routes.draw do
  resources :projects
  resources :blogs
  resources :amodels
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#home'
end
