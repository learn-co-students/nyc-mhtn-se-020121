# require and load the environment file
require_relative '../config/environment.rb'

# call this method to reload your models as you write code
def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

# student instances
liz = Student.new("Liz")
doug = Student.new("doug")
linda = Student.new("linda")

# tutor instances
sylwia = Tutor.new("Sylwia")
sean = Tutor.new("sean")
lindsay = Tutor.new("lindsay")

# course instances 
ruby = Course.new(sylwia, doug, "Ruby")
java = Course.new(sean, linda, "java")
python = Course.new(lindsay, liz, "python")
javascript = Course.new(sylwia, doug, "javascript")
piano = Course.new(sylwia, liz, "piano")
painting = Course.new(sean, liz, "painting")

# test methods here if you want 
# puts linda.courses


# ===== WARNING! DO NOT EDIT BELOW THIS LINE ===== #
binding.pry
0
