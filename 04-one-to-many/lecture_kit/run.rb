#your code goes here
# require is for gems
require 'pry'
# require_relative is for files
require_relative 'models/user'
require_relative 'models/tweet'


coffee_dad = User.new("coffee dad", "just a dad that loves coffee")
coffee_dad_copycat = User.new("sean is okay", "i wish i were as cool as the coffee dad")

# user and message
tweet = Tweet.new(coffee_dad, "ohhh that coffee#")
tweet2 = Tweet.new(coffee_dad, "coffee# dark like my soul")


# this method will return all the tweets connected to the coffee dad -> [tweet, tweet]
# coffee_dad.tweets

# allow us to create a Tweet instance from the side of the user
# puts "please tell me the message for your tweet"
# message = gets.chomp
# coffee_dad_copycat.post_tweet(message)
coffee_dad_copycat.post_tweet("please tell me the message for your tweet")



# coffee_dad.username
# coffee_dad.username = "yay"
# coffee_dad.bio
# coffee_dad.bio = "yum coffee"
# User.all



binding.pry
0


# uninitialized constant User
# -> either didn't link the file
# -> you didn't write the class