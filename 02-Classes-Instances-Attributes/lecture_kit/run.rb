require 'pry'

class Dog

    # attr_reader  <- creates a method under the hood that allows us to read a given value
    # attr_writer <- creates a method under the hood that allows us to only overwrite a value
    # attr_accessor <- does both

    attr_accessor :attitude, :name
    attr_reader :breed, :number_of_legs

    # TASK: Add two new attributes to a Dog instance: breed and attitude. 
        #  The attitude parameter should default to "jolly" if given no value upon initialization. 
        

    def initialize(name_parameter, breed_parameter, attitude_parameter = "jolly")
        # @ <- a syntax for instance variables
        @attitude = attitude_parameter
        @name = name_parameter
        @breed = breed_parameter
        @number_of_legs = 4
    end
    
    def bark
        puts "woof"
    end

    # Next, decide on whether a user should be able to read or also change the values of these attributes (jolly and breed) after the dogs have been created  
    # write appropriate methods.

    # a GETTER/READER method: allows us to READ (GET) a value
    # Linda's question: do these methods enable interface? 
    # def name
    #     @name
    # end

    # def number_of_legs
    #     @number_of_legs
    # end

    # def breed
    #     @breed
    # end

    # we are missing a SETTER/WRITER method
    # why: NoMethodError: undefined method `name=' for #<Dog:0x00007f8e7c1a2fe0 @name="Lilo">
    # def name=(new_name_parameter)
    #     @name = new_name_parameter
    # end

    # def breed=(new_breed_parameter)
    #     @breed = new_breed_parameter
    # end

end

# DRY => don't repeat yourself!
# bart_hash = {name: "Bart", number_of_legs: 4}
# lilo_hash = {name: "Lilo"}

rufus = Dog.new("Rufus", "shnaucer")
ruby = Dog.new("Ruby", "labrador", "cheeky")

# wrong number of arguments (given 1, expected 2) (ArgumentError)
# bart = Dog.new("Bart")
# lilo = Dog.new("Lilo")

binding.pry
0