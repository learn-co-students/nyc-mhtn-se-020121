require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

coffee_dad = User.new("coffee dad", "a dad who loves coffee#")
sean = User.new("sean is okay", "mid-30ths goth")
sylwia = User.new("sylwia", "just water for me")

tweet1 = Tweet.new("just gimme coffee", coffee_dad)
tweet2 = Tweet.new("what is self", coffee_dad)
tweet3 = Tweet.new("have #a coffee", coffee_dad)
tweet4 = Tweet.new("got beans?", coffee_dad)
tweet_sean = Tweet.new("i'm okay", sean)

sean.post_tweet("wish i was cool as coffee dad")
sean.average_tweet_length
coffee_dad.average_tweet_length

binding.pry
"☕️ ☕️ ☕️"