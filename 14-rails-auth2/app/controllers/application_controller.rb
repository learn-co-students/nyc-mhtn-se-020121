class ApplicationController < ActionController::Base
    # Allows current_user and logged_in? to be called in the html.erb files
    helper_method :current_user, :logged_in?
    
    # Every action in the controller must go through this check
        # Except for the ones with `skip_before_action :authorized`

        # Any instance variable saved carries on through after a before_action
    before_action :authorized
    
    def current_user
        # Find the AR instance associated with the ID in session
        @current_user ||= User.find_by(id: session[:user_id])
    end
    
    def logged_in?
        # Return true or false depending on if someone is logged in or not
        !!current_user
    end

    def authorized
        # Redirect to login page if not logged in 
        redirect_to login_path unless logged_in?
    end
    

    
end
