class UsersController < ApplicationController
  skip_before_action :authorized, only: [:login, :handle_login]

  def login
  end

  def handle_login

    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to places_path
    else
      redirect_to login_path
    end

  end

  def logout
    session[:user_id] = nil
    redirect_to login_path
  end

end
