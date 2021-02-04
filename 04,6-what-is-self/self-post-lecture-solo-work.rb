# THIS FILE IS HERE IF YOU WANT TO REDO THIS LATER AND DON'T WANT TO HAVE YOUR LECTURE CODE OVERWRITTEN

require 'pry'

class User

    @@all = []

    attr_reader :username

    def initialize(username)
        @username = username
        @id = generate_id
        # GUESS: WHAT IS SELF HERE? Why? what attributes self will have? Check it in binding.pry by running "self"
        # binding.pry
        @@all << self
    end

    def self.all
        # GUESS: WHAT IS SELF HERE? Why? Check it in binding.pry by running "self"
        # binding.pry
        @@self
    end

    def post_message
        # GUESS: WHAT IS SELF HERE? Why? Check it in binding.pry by running "self". 
        # binding.pry
        puts "hello"
    end

    # GUESS: WHAT IS SELF HERE? Why? Check it in binding.pry by running "self". 
    # binding.pry

    private
    def generate_id
        # GUESS: WHAT IS SELF HERE? Why? what attributes self will have? Check it in binding.pry by running "self"
        # binding.pry
        ([*('A'..'Z'),*('0'..'9')]-%w(0 1 I O)).sample(8).join
    end
end

sylwia = User.new("the_failed_comedian")
lindsay = User.new("friends_fan_00")
sean = User.new("sean_who_wears_black")

# GUESS: WHAT IS SELF HERE? what attributes self will have? Check it in binding.pry by running "self"
# binding.pry

sylwia.post_message
User.all

binding.pry
0