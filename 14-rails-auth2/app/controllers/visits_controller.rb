class VisitsController < ApplicationController

    def index
        @visits = @current_user.visits
    end

    def new 
        @visit = Visit.new
        @places = Place.all #- @current_user.places
    end

    def create
        # @current_user -> comes from the before_action :authorized
        # current_user -> comes from ApplicationController
        @visit = @current_user.visits.create(visit_params)
        redirect_to place_path(@visit.place)
    end

    def visit_params
        params.require(:visit).permit(:place_id, :length)
    end

end
