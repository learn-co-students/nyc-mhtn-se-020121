class UsersController < ApplicationController

  def login
  end

  def handle_login

    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      redirect_to "/"
    else
      redirect_to login_path
    end

  end

end
