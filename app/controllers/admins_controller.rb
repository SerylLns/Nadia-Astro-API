class AdminsController < ApplicationController
  before_action :authenticate_user!, :authorize

  # ****** ARTICLES ********
  def index
      @articles = Article.all
      @videos = Video.all
  end

  def new_article
    @article = Article.new
  end

  def create_article
    @article = Article.new(new_article_params)
    if @article.save 
      redirect_to "/admin"
    else
      render :new_article
    end
  end

  def show_article
    @article = Article.find(params[:id])
  end

  def update_article
    @article = Article.find(params[:id])
    @article.update(update_article_params)
    redirect_to root_path
  end

  def destroy_article
    @article = Article.find(params[:id])
    @article.destroy

    redirect_to root_path
  end
  #************************* 
  # ****** COMMENTS ********
  #************************* 
  def show_comments
    @article = Article.find(params[:id])
    @comments = @article.comments
  end

  def edit_comments
    @comment = Comment.find(params[:id])
  end

  def update_comments
    @comment = Comment.find(params[:id])
    @comment.update(comment_params)
    redirect_to admin_index_path
  end

  def destroy_comments
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to admin_index_path
  end

  #************************* 
  # ****** USERS ********
  #************************* 

  def show_users
    @users = User.all
  end

  def destroy_user
    @user = User.find(params[:id])
    @user.destroy
    redirect_to admin_index_path
  end

  def set_admin
    @user = User.find(params[:id])
    @user.is_admin = !@user.is_admin
    @user.save
    redirect_to admin_index_path
  end
  
  #************************* 
  # ****** VIDEOS ********
  #************************* 
  def show_videos
    @videos = Video.all
  end

  def new_video
    @video = Video.new
  end

  def create_video
    @video = Video.new(video_params)
    @video.save
    redirect_to "/admin/videos"
  end

  def destroy_video
    @video = Video.find(params[:id])
    @video.destroy
    redirect_to "/admin/videos"
  end



  private

  def authorize
    if !current_user.is_admin
      redirect_to root_path
    end
  end

  def new_article_params
    params.require("/admin/new/article").permit(:title, :content, :photo)
  end
  def update_article_params
    params.require(:article).permit(:title, :content, :photo)
  end

  def comment_params
    params.require(:comment).permit(:pseudo, :content)
  end

  def video_params
    params.require(:video).permit(:title, :url, :provider)
  end
end
