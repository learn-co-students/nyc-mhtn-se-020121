class SushisController < ApplicationController

    # STEP 2 - our controller index method decides
    # how to handle the response
    def index 
        # hey Active record!! write some SQL query to retrieve all rows
        # from the sushis table
        # then send them back to me in the form of instances!
        @sushis = Sushi.all #this is an array of Sushi instances!
        # why an instance variable? so our view file can use it!
        # render the /views/sushis/index.html.erb file
        # this is our response - we are sending pure HTML code
        # so the browser knows how to render it
        render :index
    end 
end
