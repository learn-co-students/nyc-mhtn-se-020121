class Tutor

    # a class variable to store all instances
    @@all = []

    # creates a reader and writer method for the @name variable
    attr_accessor :name

    # invoked when Tutor.new("Lindsay") 
    def initialize(name)
        @name = name
        # add this instance to the @@all array of all instances
        @@all << self
    end 

    def courses
        # returns an array of `Course` instances associated
        # with the `Tutor` instance.

        # first version
        # Course.all.select do |course|
        #     course.tutor == self
        # end 

        # refactored version - select only those courses, where "self" is the tutor
        # ie if tutor is sylwia, find only the courses where sylwia is the tutor
        Course.all.select { |course| course.tutor == self }
    end 

    def students 
        # returns an array of `Student` instances tutored by
        #  the `Tutor` instance.

        # self.courses.map do |course|
        #     course.student
        # end 

        # self.courses.map { |course| course.student }
        courses.map { |course| course.student }
        # further refactor
        # courses.map(&:student)
    end 

    def tutored_student?(student)
        # - a `Student` instance is the only argument
        # - returns `true` if the `Tutor` has tutored this `Student` 
        # (if there is a `Course` instance that has this `Tutor` and `Student`), 
        # returns `false` otherwise

        # call on the students instance method as a helper method,
        # check if the student instance is included in that array.
        
        # self.students.include?(student)
        students.include?(student)
    end 

    def self.all 
        # provide read access to the @@all class variable
        @@all
    end
  
end

    # different model domain example
    # Server -< Meal >- Chef
    # meals = Meal.all.select { |meal| meal.chef == "chef bob"}
    # meals.map { |meal| meal.server }
