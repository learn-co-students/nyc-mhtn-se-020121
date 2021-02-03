require 'pry'

class Dog

    # class variable
    @@all = []

    # getter method -> getting information, grabbing information, we can't change it at all
    attr_reader :breed, :number_of_legs
    # getter + setter method -> we can read it and change it,  the accessor lets us read and change the variable, we can change/overwrite the instance variable's value
    attr_accessor :fav_snack, :name 
    # MACROS are methods that under the hood create other methods

    # alex's question: do you need to initialize these attributes in the initialize method, or can we do it only in the attr macros?

    # cmd + d 
    # cmd + shift + l
    def initialize(name_parameter, fav_snack_parameter, breed_parameter)
        @name = name_parameter
        @fav_snack = fav_snack_parameter
        @breed  = breed_parameter
        @number_of_legs = 4
        @@all << self
    end

    # this is a class method!!
    def self.all
        @@all
    end

    def run
        puts "#{name} the #{breed}running fast as the wind"
    end

    # BUT HOW DOES RUBY KNOW THAT NAME IS THE METHOD?!?!?!?!?!?
    # daria.sit <- sit method is invoked on an instance of the Dog
    def sit
        # method lookup chain 
        #  bottom line: use implicit (hidden) self all the time except for overwriting/changing the values
                    # name <- reader
                    # self.name = "chaos" <- writer

        puts "#{name} is sitting on its #{number_of_legs} legs" # <- implicit self (hidden self), used ALWAYS except for writer methods
        puts "#{self.name} is sitting on its #{self.number_of_legs} legs" # <- explicit self (we state it), should be used only when you want to change a value

        # ^ these two are giving the same return values
        # ^ in the first one, it's running the "name" method on the instance and on the second one I told it specifically to run it on this instance
        # ^ self. is hidden in the first one
        # ^ same id
        puts "#{@name} is sitting on its #{@number_of_legs} legs" # <- not safe, not a good practice
        # puts "#{self.@name} is sitting on its #{self.@number_of_legs} legs" <- syntax error, unexpected tIVAR
    end

    def bark(barking_sound)
        puts "#{name} says: '#{barking_sound.upcase}!'"
    end

    def sleep
        puts "#{name} is sleeping: 'zzzzz' and dreaming about #{fav_snack}"
    end

    def jump
        binding.pry
    end

end 

ruby = Dog.new("Ruby", "bones", "pug")
bart = Dog.new("Bart", "bacon", "maltese")
daria = Dog.new("Daria", nil , "big dog")

# wrong number of arguments (given 0, expected 1) (ArgumentError)
# ruby.bark
ruby.bark("woof")
bart.sleep
daria.sit

# It is an instance variable - it is an attribute
# ^^^^^^^^


# number_of_legs is added to an instance upon initialization - It’s initialized to a default value

# it can be used within the same instance but can not be manipulated -> it, in fact, can be manipulated! 
# WHY CAN WE change it even though it's hardoced>!?!!


# Because it is in the scope of the class And you are using it within the class 
binding.pry
0

# HOW TO KNOW WHAT SELF IS:
# 1. see what the method is called on (e.g. daria.sit or Dog.all)
# 2. see where the self is invoked (the execution context) 
# 3. BINDING.PRY!!!!