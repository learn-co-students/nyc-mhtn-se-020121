class ApplicationController < ActionController::Base

    def hello_world
        # If the Action name matches the view file, you are good to go

        # Instance Variables from the controller becomes available in the views
        @chicken = "Hello From Controller"
    end

end
