require 'pry'

class Person

    @@bubbles = "bubbles everywhere"
    @@all = []

    attr_reader :name, :hunger_time
    attr_accessor :last_hunger_level_change, :hunger_level

    def initialize(name, hunger_time = 0.01)
        @last_hunger_level_change = Time.now #when was the last time a person got hungrier
        @name = name
        @hunger_level = 5.0 #how hungry the person is in the beginning (0 - max, 5 is min)
        @hunger_time = hunger_time #how fast a person gets hungry
        @@all << self
    end

    # Person.all <- it's a class method because there is a dot in the name
    def self.all
        @@all
    end

    ######## COMMENTED IT OUT BECAUSE I'LL BE WORKING ON THIS METHOD BELOW
    # `Person#shower` <- if there's a hashtag, that's an instance method
    # def shower
    #     "ocean ocean ocean"
    # end

    def self.names_only
        # return value: array of all names
        # 1. get an array of all instances
        # 2. use an iterating method to get only the name attributes
            # [instance, instance] -> [name, name]

        # block syntax -- use it when the body is longer than one line
            # all.map do |person|
            #     person.name
            # end

        # use this when the body is just one line
        all.map{|person| person.name}

        # proc syntax -> use it if youve applying one method to every instance
        # all.map(&:name)
    end

        # `Person#shower` <- if there's a hashtag, that's an instance method
        def shower
            puts "ocean ocean ocean"
            head_n_shoulders
        end
    
        def head_n_shoulders
            puts "😩 😩 😩 😩 😩 😩  getting hungry: #{hunger_level} 😩 😩 😩 😩 😩 😩"
            if check_hunger
                if hunger_level >= 1
                    rinse
                    lather
                    head_n_shoulders
                else
                    puts "💀 💀 💀  DEAD 💀 💀 💀 "
                    return "#{name} no more"
                end
            else
                rinse
                lather
                # repeat
                head_n_shoulders # <- recursion -- a method is calling on itself; now, it is resulting in STACK OVERFLOW
            end
        end
    
        def rinse
            puts "💧 💧 💧 💧 💧 💧  rinsing 💧 💧 💧 💧 💧 💧 "
        end
    
        def lather
            puts @@bubbles
            @@bubbles = "🧼 🧼 🧼 more bubbles, " + @@bubbles
        end
    
        def check_hunger
            if hungry_yet?
                self.hunger_level -= 0.25
                self.last_hunger_level_change = Time.now
            end
        end
    
        def hungry_yet?
            Time.now - last_hunger_level_change >= hunger_time
        end
    
        # def repeat
        #     head_n_shoulders
        # end
end

# 2 test these:
# - whether you can create a person with/out the hunger time
# - whether the Time.now works

sylwia = Person.new("Sylwia")
programmer = Person.new("Programmer", 0.02)

binding.pry
0

# this code is an illustration of the joke:
# How did a programmer die in the shower?
# They read the shampoo bottle: rinse, lather, repeat.
