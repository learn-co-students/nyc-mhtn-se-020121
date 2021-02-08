class Course

    @@all = []

    # creates only reader methods for the
    # @course_name, @tutor, and @student instance variables
    attr_reader :course_name, :tutor, :student

    def initialize(tutor_instance, student_instance, course_name)
        @tutor = tutor_instance
        @student = student_instance
        @course_name = course_name
        @@all << self
    end 

    def self.all 
        @@all
    end 

end