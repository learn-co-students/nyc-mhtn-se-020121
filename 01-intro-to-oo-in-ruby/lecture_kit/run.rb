require 'pry'

class String

    # def reverse
    #     puts "meow"
    # end

    def excited
        # binding.pry
        self.upcase + "!!!"
    end

    def titleize
        # literal
        short_words_arr = %w{a an and as at but by for if in of on or the to via vs vs.}
    
        title = split.map do |word|
            # lines 18-22 could be refactored using ternaries:
            ## short_words_arr.include?(word) ? word : word.capitalize
            # or one-liner if/unless statement, in which case we need to return the word:
            ## word.capitalize! unless short_words_arr.include?(word)
            ## word
            if short_words_arr.include?(word)
                word
            else 
                word.capitalize
            end
        end
        title.join(" ")
    end
end


dog1 = {name: "Bart", breed: "maltese"}
dog2 = {namne: "lilo", breed: "fluffy"}
dog3 = {name: "daria", breed: "big dog"}

dogs_array = [dog1, dog2, dog3]

# goal: to have each of the names output on the screen
dogs_array.each do |dog|
    # binding.pry
    puts dog[:name]
end

# return value: saves the output of the execution of the method
# puts: only prints the value on the screen (e.g. CLI)

class Dog
    
    def bark
        puts "woof"
    end

    # def bark
    #     "what?"
    # end

    def sit
        puts "this lovely pup is sitting on its fluffy paws"
    end
end

bart = Dog.new
# #<Dog:0x00007facc1926790>

bart.object_id
# 70189979349960 

daria = Dog.new

binding.pry
0