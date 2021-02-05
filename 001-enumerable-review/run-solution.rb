require 'pry'

def instructors
    [
        {
            name: "Annie Z",
            role: "Coach",
            siblings: 2,
            owns_car: false
        },
        {
            name: "Sylwia V",
            role: "Lead",
            siblings: 1,
            owns_car: true
        },
        {
            name: "Isabel L",
            role: "Coach",
            siblings: 0,
            owns_car: true
        },
        {
            name: "Eric K",
            role: "Lead",
            siblings: 4,
            owns_car: false
        }
    ]
end



def all_names
    instructors.map do |instructor_hash|
        instructor_hash[:name]
    end
    # map takes an array of stuff
    # map uses the last line of block and << into a new array
    # map returns the new array
end
###### ALTERNATIVE SYNTAX:
# def all_names
#     instructors.map{|instructor_hash| instructor_hash[:name]}
# end


def name_and_role
    instructors.map do |instructor_hash|
        {instructor_hash[:name] => instructor_hash[:role]}
    end
end
###### ALTERNATIVE SYNTAX:
# def name_and_role
#     instructors.map{|instructor_hash| {instructor_hash[:name] => instructor_hash[:role]}}
# end


def all_coaches
    instructors.select do |instructor_hash|
        instructor_hash[:role] == "Coach"
    end

    # instructors.select {|instructor_hash| instructor_hash[:role] == "Coach" }

    # select takes an array of stuff
    # select uses the last line of block (condition) to decide whether we want to << into a new array
    # select returns the new array
end

###### ALTERNATIVE SYNTAX:
# def all_coaches
#     instructors.select{|instructor_hash| instructor_hash[:role] == "Coach"}
# end


def all_leads
    instructors.select do |instructor_hash|
        instructor_hash[:role] == "Lead"
    end
end
###### ALTERNATIVE SYNTAX:
# def all_leads
#     instructors.select{|instructor_hash| instructor_hash[:role] == "Lead"}
# end


def first_instructor_with_a_car
    instructors.find do |instructor_hash|
        # instructor_hash[:owns_car] == true
        instructor_hash[:owns_car]
    end
end
    # find takes an array of stuff
    # select uses the last line of block (condition) to decide whether we want to return that element
    # select returns the first element

###### ALTERNATIVE SYNTAX:
# def first_instructor_with_a_car
#     instructors.find{|instructor_hash| instructor_hash[:owns_car]}
# end




def instructors_with_more_than_1_sibling
    sub_instructors = instructors.select do |instructor_hash|
        instructor_hash[:siblings] > 1
    end
    sub_instructors
end



def most_siblings
    instructors.max_by do |instructor_hash|
        instructor_hash[:siblings]
    end
    # max_by takes an array of stuff
    # max_by uses the last line of block (number) and returns the element with the highest number
    # returns an element
end

###### ALTERNATIVE SYNTAX:
# def most_siblings
#     instructors.max_by{|instructor_hash| instructor_hash[:siblings]}
# end


def total_siblings
    instructors.sum do |instructor_hash|
        instructor_hash[:siblings]
    end
end

###### ALTERNATIVE SYNTAX:
# def most_siblings
#     instructors.sum{|instructor_hash| instructor_hash[:siblings]}
# end

binding.pry
0