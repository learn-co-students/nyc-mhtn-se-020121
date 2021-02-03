# your code goes here
require 'pry'

class Person

    # a new person knows its name once he/she has been initialized but cannot overwrite
    attr_reader :name, :happiness, :hygiene

    # a person instance can change his/her bank_account amount
    attr_accessor :bank_account

    def initialize(name)
        @name = name
        @bank_account = 25
        @happiness = 8
        @hygiene = 8
    end

    # a person instance can change his/her happiness index (FAILED - 2)
    # a person's happiness doesn't exceed 10 (FAILED - 3)
    # a person's happiness doesn't go below 0 (FAILED - 4)

    def happiness=(new_value)
        # reader and writer operate on/return instance vars
        # cap h at 0 or 10
        # binding.pry 

        # FIRST WAY:
        # @happiness = new_value
        # if @happiness < 0
        #     @happiness = 0
        # elsif @happiness > 10
        #     @happiness = 10
        # end

        # BETTER WAY:
        @happiness = new_value
        @happiness = 0 if @happiness < 0
        @happiness = 10 if @happiness > 10

        # alternative way:
        # @happiness = new_value
        # @happiness = @happiness.clamp(0, 10)

        # yet alternative way:
        # @happiness = new_value.clamp(0, 10)
    end

    def hygiene=(new_value)
        @hygiene = new_value
        @hygiene = 0 if @hygiene < 0
        @hygiene = 10 if @hygiene > 10
    end

    # returns true if happiness is greater than seven, else false
    def happy?
        # if happiness > 7
        #     true
        # else
        #     false
        # end
        happiness > 7
    end

    def clean?
        hygiene > 7
    end

    def get_paid(salary)
        self.bank_account += salary # <- explicit self because it's a writer method
        'all about the benjamins' # <- implicit return because ruby returns the last line
    end

    def take_bath
        self.hygiene += 4
        "♪ Rub-a-dub just relaxing in the tub ♫"
    end

    def work_out
        self.hygiene -= 3
        self.happiness += 2
        "♪ another one bites the dust ♫"
    end

    def call_friend(friend_instance)
        self.happiness += 3
        friend_instance.happiness += 3
        # binding.pry
        "Hi #{friend_instance.name}! It's #{name}. How are you?"
    end

    def start_conversation(person_instance, topic_string)
        # if topic_string.downcase == 'politics'
        #     self.happiness -= 2
        #     person_instance.happiness -= 2
        #     'blah blah partisan blah lobbyist'
        # elsif topic_string.downcase == 'weather'
        #     self.happiness += 1
        #     person_instance.happiness += 1
        #     'blah blah sun blah rain'
        # else
        #     'blah blah blah blah blah'
        # end

        # MORE OPTIMAL WAY IF YOU HAVE IF / ELSIF / ELSE 
        case topic_string.downcase
        when 'politics'
            self.happiness -= 2
            person_instance.happiness -= 2
            'blah blah partisan blah lobbyist'
        when 'weather'
            self.happiness += 1
            person_instance.happiness += 1
            'blah blah sun blah rain'
        else 
            'blah blah blah blah blah'
        end

        # CASE STATEMENT WITH A HELPER METHOD
        # case topic_string.downcase
        # when 'politics'
        #     self.change_happiness(:-, 2)
        #     person_instance.change_happiness(:-, 2)
        #     'blah blah partisan blah lobbyist'
        # when 'weather'
        #     self.change_happiness(:+, 1)
        #     person_instance.change_happiness(:+, 1)
        #     'blah blah sun blah rain'
        # else 
        #     'blah blah blah blah blah'
        # end

    end

    def change_happiness(operator, value)
        # we will receive the operator + value
        # binding.pry
        self.happiness = self.happiness.send(operator, value)
    end

end


#  a new person is instantiated with a name
#  Person.new("Sylwia")

# binding.pry
# 0