class Api::V1::ArticlesController < ApplicationController

  def index
    @articles = Article.all
    res = {}
    @articles.each do |article|
      res[article.id] = {
        article: article,
        # photo: article.photo.url,
        likes: article.likes,
        comments: article.comments
      }
    end
    render json: res
  end

  def show 
    @article = Article.find(params[:id])
    render json: {
      article: @article,
        # photo: @article.photo.url,
      likes: @article.likes,
      comments: @article.comments
    }
  end
end
