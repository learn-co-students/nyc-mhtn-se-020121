class Tweet

    @@all = []

    attr_reader :user_instance, :message
    
    def initialize(user_instance, message)
        @user_instance = user_instance
        @message = message
        @@all << self
    end

    def self.all
        @@all
    end

    def username
        user_instance.username
    end
end