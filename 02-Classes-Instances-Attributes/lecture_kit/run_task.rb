require 'pry'

class Dog

    def initialize(name_parameter)
        # @ <- a syntax for instance variables
        @name = name_parameter
        @number_of_legs = 4
    end
    
    def bark
        puts "woof"
    end

    # we are missing a SETTER/WRITER method
    # why: NoMethodError: undefined method `name=' for #<Dog:0x00007f8e7c1a2fe0 @name="Lilo">
    def name=(new_name_parameter)
        @name = new_name_parameter
    end

    # a GETTER/READER method: allows us to READ (GET) a value
    # Linda's question: do these methods enable interface? 
    def name
        @name
    end

    def number_of_legs
        @number_of_legs
    end

end

bart_hash = {name: "Bart", number_of_legs: 4}
lilo_hash = {name: "Lilo"}

bart = Dog.new("Bart")
lilo = Dog.new("Lilo")

# emoji shortcut: ctrl + command + space

binding.pry
0