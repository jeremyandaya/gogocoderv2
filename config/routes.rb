Rails.application.routes.draw do

  devise_for :coders
  # devise_for :coders, :controllers => { registrations: 'registrations' }
  get 'welcome/index'
  resources :codes

  # default root start
  # authenticated :coder do
  #   root 'codes#index', as: "authenticated_root"
  # end

  # root 'welcome#index'
  # default root end

  # new root start
  authenticated :coder do
    root 'welcome#welcome', as: "authenticated_root"
  end

  root 'welcome#index'
  # new root end

  get 'welcome' => 'welcome#welcome'
  get 'html/exercise1' => 'html#exercise1'
  get 'css/exercise1' => 'css#exercise1'
  get 'javascript/exercise1' => 'javascript#exercise1'



  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
