class PlacesController < ApplicationController

    # get '/places'
    def index
        # byebug
        @places = Place.all
        # render :index
        # render :tacos <- you can do that but maybe don't if you don't have to
    end

    # get '/places/new' <- it gets us the form
    def new
        # 1. create a clean slate of a Ruby instance
        # byebug
        @errors = flash[:errors]
        @place = Place.new
        # 2. response: see the form on the page
        # render :new
    end

    # post '/places'
    def create
        # 1. we want to evaluate the params hash that we got from the form
        # byebug
        # 2. get the nested hash out to create a Place instance out of it
        place_params = params.require(:place).permit(:name, :street_address, :description, :zip)
        # 3. create a new instance
        #  THIS IS WHERE WE WILL INTRODUCE SAFEGUARDS

        # byebug
        # if the params is not providing us with correct data, we should be taken back to the "new" form,
        # if we are able to create a new instance, we should be redirected to the new place's show page
        new_place = Place.create(place_params)
        if new_place.valid?
            redirect_to place_path(new_place)
        else
            # flash[:chicken] = "you got this!"
            flash[:errors] = new_place.errors.full_messages # <- this will be an array of strings
            redirect_to new_place_path
        end
        # 4. direct the user to a happy place
        
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
        @visits = @place.visits
    end

    def destroy
        # 1. find the place given the params
        # 2. destroy the place :(
        # 3. redirect the user somewhere
        place = Place.find(params[:id])
        place.destroy
        redirect_to places_path
    end
end
