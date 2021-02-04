class User

    @@all = []

    attr_accessor :bio
    attr_reader :username

    def initialize(username_par, bio_par)
        @username = username_par
        @bio = bio_par
        @@all << self 
    end

    def self.all 
        @@all 
    end 

    def tweets
        Tweet.all.select{|tweet| tweet.user == self}
    end

    def post_tweet(message_param)
        Tweet.new(message_param, self)
    end

    def print_all_tweets
        puts username.upcase + ":\n\n"
        # the below method should be refactored to tweets.each{|tweet| puts "✨ #{tweet}"}
        tweets.each do |tweet| 
            # binding.pry
            puts "✨ #{tweet.content}"
        end
        "" #this is here to have a visually-pleasing return value
    end

    def average_tweet_length
        # this could be refactored to: tweets.sum(&:length)
        tweets.sum{|tweet| tweet.length} / tweets.size.to_f
    end

    def self.longest_tweets
        # this could be refactored to: 
        # self.all.max_by(&:average_tweet_length)
        all.max_by do |user| 
            user.average_tweet_length
        end
    end


    
end