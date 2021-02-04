class User

    @@all = []

    attr_reader :username
    attr_accessor :bio

    def initialize(username, bio)
        @username = username
        @bio = bio
        @@all << self
    end

    def self.all
        @@all
    end

    def tweets
        # this method will return all the tweets connected to the coffee dad -> [tweet, tweet]
        # 1. access ALL TWEETS
        # Tweet.all.select do |tweet|
        #     tweet.user_instance == self
        # end

        Tweet.all.select{|tweet| tweet.user_instance == self}

        # 2. choose only the tweets whose author is the user
            # - find -> first element tat matches the condition
            # - select -> an array of all the elements that match the condition
    end

    def post_tweet(message)
        # 1. create a new tweet
        Tweet.new(self, message)
        # binding.pry
    end
    
end

# - [ ] `User#tweets` returns an array of Tweet instances
# - [ ] `User#post_tweet` takes a message, creates a new tweet, and adds it to the user's tweet collection