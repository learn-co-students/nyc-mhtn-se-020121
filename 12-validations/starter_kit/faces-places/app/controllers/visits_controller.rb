class VisitsController < ApplicationController

    def new
        @visit = Visit.new
        @places = Place.all
        @people = Person.all
    end

    def create
        visit_params = params.require(:visit).permit(:length, :person_id, :place_id)
        Visit.create(visit_params)
        place = Place.find(params[:visit][:place_id])
        # redirect_to place_path(params[:visit][:place_id]) <- you can pass an id only
        redirect_to place_path(place) # <- you can pass a whole instance
    end
end
