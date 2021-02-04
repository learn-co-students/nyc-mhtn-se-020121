require 'pry'

class Tweet

    attr_reader :content, :user

    @@all = []

    def initialize(content_par, user_par)
        @content = content_par
        @user = user_par
        @@all << self
    end

    def self.all
        @@all
    end

    ##- `Tweet.print_all_tweets` (this method needs to be entirely written)- `puts` a list of all tweets by all Users following the above format

    def self.print_all_tweets

        User.all.each do |user|
            # binding.pry
            user.print_all_tweets
        end 
        ""
    end 

    def username
        user.username  # method lookup chain -- it's the same as the above but sometimes has gotchas        
    end

    def length
        content.length
    end

    def generate_tweet
        max = $random_chars.length
        num = rand(0...max)
        $random_chars.sample(num).join("")
    end

    # this is a remnant of a past -- let's imagine someone was coding fast and needed some quick random data and then forgot about it
    # def to_s
    #     generate_tweet
    # end
    
end

# this global variable usually would be placed in "tools" file or be a method inside of a module so it could be used in different classes/files; for simplicity, it's a global variable;
$random_chars = %w{🁒 ℊ ℀ ☁︎ ☼ ℥ ⚈ 🃘 ⎆ ⍒ ⎲ ⎢ ⏈ ┼ ⏋ ␎ ⑇ ⑉ ␦ ␥ ☠︎}