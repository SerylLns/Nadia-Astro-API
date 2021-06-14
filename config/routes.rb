Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"

  get '/about', to: 'pages#home'
  get '/video', to: 'pages#home'
  get '/blog', to: 'pages#home'
  get '/contact', to: 'pages#home'
  get '/article/:id', to: 'pages#home'

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
