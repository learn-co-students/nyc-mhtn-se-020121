class Patient

    @@all = []

    attr_reader :name

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    # to make a patient know about their all doctors
    # 1. create a bridge/helper method -> appointments
    # 2. map over the appointments to get all the doctors

    def appointments
        Appointment.all.select{|appointment| appointment.patient == self}
    end
    
end