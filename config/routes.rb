Rails.application.routes.draw do
  devise_for :users
  # front react routes 
  root to: "pages#home"
  get '/about', to: 'pages#home'
  get '/video', to: 'pages#home'
  get '/blog', to: 'pages#home'
  get '/contact', to: 'pages#home'
  get '/article/:id', to: 'pages#home'

  # admin route
  # Articles
  get '/admin', to: "admins#index", as: "admin_index"
  get '/admin/new/article', to: "admins#new_article", as: "new_admin_article"
  post '/admin/new/article', to: "admins#create_article", as: "create_article"
  get '/admin/article/:id', to: "admins#show_article", as: "article"
  patch '/admin/article/:id', to: "admins#update_article"
  delete '/admin/article/:id', to: "admins#destroy_article"
  # Comments
  get '/admin/article/:id/comments', to: "admins#show_comments", as: "article_comments"
  get '/admin/comments/:id', to: "admins#edit_comments", as: "edit_comment"
  patch '/admin/comments/:id', to: "admins#update_comments", as: "comment"
  delete '/admin/comments/:id', to: "admins#destroy_comments", as: "delete_comment"
  # User
  get '/admin/users', to: "admins#show_users"
  delete '/admin/users/:id', to: "admins#destroy_user"
  get '/admin/user/:id/admin', to: 'admins#set_admin', as: "set_user_admin"
  # Videos
  get "/admin/videos", to: "admins#show_videos", as: "videos"
  get "/admin/new/video", to: "admins#new_video"
  post "/admin/videos", to: "admins#create_video"

  # API routes 
  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index, :show]
      post "/articles/:article_id/like", to: "likes#like_article"
      delete "/articles/:article_id/unlike", to: "likes#unlike_article"
      post "/articles/:article_id/like", to: "likes#like_article"
      post "/articles/:article_id/comment", to: "comments#create"
      get "/getvideos", to: "videos#index"
    end
  end
end
