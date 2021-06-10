Rails.application.routes.draw do
  devise_for :users
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
