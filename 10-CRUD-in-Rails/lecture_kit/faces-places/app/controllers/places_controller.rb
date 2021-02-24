class PlacesController < ApplicationController

    # get '/places'
    def index
        @places = Place.all
        # render :index
        # render :tacos <- you can do that but maybe don't if you don't have to
    end

    # get '/places/new' <- it gets us the form
    def new
        # 1. create a clean slate of a Ruby instance
        # byebug
        @place = Place.new
        # 2. response: see the form on the page
        # render :new
    end

    # post '/places'
    def create
        # 1. we want to evaluate the params hash that we got from the form
        byebug
        # 2. get the nested hash out to create a Place instance out of it
        place_params = params.require(:place).permit(:name, :street_address, :description, :zip)
        # 3. create a new instance
        new_place = Place.create(place_params)
        # 4. direct the user to a happy place
        redirect_to place_path(new_place)
        # redirect_to places_path
    end

    # get "/places/:id/edit"
    def edit
        # 1. find the instance we want to update
        @place = Place.find(params[:id])
        # render the edit view file
        # render :edit
    end

    # patch "/places/:id"
    def update
        place = Place.find(params[:id])
        place_params = params.require(:place).permit(:name, :street_address, :description, :zip)
        place.update(place_params)

        redirect_to place_path(place)
    end

    def show
        # byebug
        @place = Place.find(params[:id])
    end

    def hello
        render :hello
    end
end
