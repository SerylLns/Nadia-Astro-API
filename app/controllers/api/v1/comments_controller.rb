class Api::V1::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    @article = Article.find(params[:article_id])
    @comment = Comment.new(comment_params)
    @comment.article = @article
    @comment.save
  end

  def comment_params
    params.require(:comment).permit(:pseudo, :content)
  end 
end
