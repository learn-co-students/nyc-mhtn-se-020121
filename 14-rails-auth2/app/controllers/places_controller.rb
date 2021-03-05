class PlacesController < ApplicationController

    skip_before_action :authorized, only: [:index]

    def index
        @places = Place.all
    end
    
    def show
        @place = Place.find(params[:id])
        @visits = @place.visits
    end

end
