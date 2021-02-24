class PlacesController < ApplicationController

    def index
        @places = Place.all
        # render :index
        # render :tacos <- you can do that but maybe don't if you don't have to
    end

    def show
        # byebug
        @place = Place.find(params[:id])
    end
end
