class Appointment

    @@all = []

    attr_reader :doctor, :patient, :condition
    attr_accessor :date

    def initialize(doctor_instance, patient_instance, condition, date)
        @doctor = doctor_instance
        @patient = patient_instance
        @condition = condition
        @date = date
        @@all << self
    end

    def self.all
        @@all
    end
    
end