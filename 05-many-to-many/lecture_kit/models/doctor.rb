class Doctor

    @@all = []

    # name -> kinda shady to change a name
    # name -> Reader because it won’t change
    # Accessor -> because maybe they'd get married

    attr_reader :name
    attr_accessor :specialty, :location

    def initialize(name, specialty, location="NY")
        @name = name
        @specialty = specialty
        @location = location
        @@all << self
    end

    def self.all
        @@all
    end

    def appointments
        # select all the appointments that belong to the doctor
        # binding.pry
        Appointment.all.select{|appointment| appointment.doctor == self}
    end

    def patients
        # get all the patients from the appointments that belong to the doctor
        # 1.invoke the appointment (joiner/bridge) method 
        # 2. from the array of appointment instances get only the instances of the patients 
        #### [app instance, app instance] -> [patient, patient]
        # binding.pry

        # BLOCK SYNTAX -> when there are more than one line in the body
            # appointments.map do |appointment|
            #     appointment.patient
            # end

        # INLINE SYNTAX -> when there is just one line of the body
        appointments.map{|appointment| appointment.patient}.uniq

        # PROC syntax -> when you apply the same method on each of the instances
            # appointments.map(&:patient).uniq
    end

    def patient_names_only
        patients.map{|patient| patient.name}
        # patients.map(&:name)
        # binding.pry
    end
    
end