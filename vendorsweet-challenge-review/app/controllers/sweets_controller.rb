class SweetsController < ApplicationController
  def index
    @sweets = Sweet.all
  end

  def show
    @sweet = Sweet.find(params[:id])
    # an array of vendors that sell this sweet
    @vendors = @sweet.vendors
  end 
end
