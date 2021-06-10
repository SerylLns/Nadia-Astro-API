class Api::V1::LikesController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:like_article, :unlike_article
]
  # protect_from_forgery prepend: true, with: :exception
  
  def like_article
    @article = Article.find(params[:article_id])
    @like = Like.new(like_params)
    @like.article = @article
    @like.save
    
  end

  def unlike_article
    @like = Like.find_by(ip_user: params[:ip_user], article_id: params[:article_id])
    @like.destroy
  end

  def like_params
    params.require(:like).permit(:ip_user)
  end
end
