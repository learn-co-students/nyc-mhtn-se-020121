class Student

    @@all = []

    attr_accessor :name

    def initialize(name) 
        @name = name
        @@all << self
    end 

    # select all courses where self was the student
    # ie liz.courses => liz == self
    # select all courses where the student in this course is liz aka (self)
    def courses
        # Course.all.select do |course|
        #     course.student == self
        # end 
        Course.all.select { |course| course.student == self }
    end


    def tutors 
        # map over all courses that self is associated with
        # only include the tutor instance from each course 

        # self.courses.map { |course| course.tutor }
        courses.map { |course| course.tutor }
    end
    
    def enrolled_fulltime?
        # - returns `true` if the `Student`
        # has enrolled for at least 3 Courses, returns `false` otherwise

        # using the courses instance method as a helper method,
        # check all courses self is associated with
        # then count the number of courses in that array
        # then check if that number is greater than or equal to 3

        # self.courses.count >= 3
        courses.count >= 3
    end

    def self.all
        @@all
    end

end
