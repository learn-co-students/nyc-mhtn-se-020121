Visit.destroy_all #<- destroy joiner first
Place.destroy_all
Person.destroy_all
Visit.reset_pk_sequence
Place.reset_pk_sequence
Person.reset_pk_sequence


ako_sushi = Place.create(name: "Ako Sushi", street_address: "899 Bleecker Ave", zip: 11237, description: "this is a wonderful place")
heavenly_scent = Place.create(name: "Heavenly Scent Laundromat", street_address: "1000 Hart St", zip: 11237, description: "a bit dodgy and a health hazard but open 24/7")

def create_restaurant
    name = Faker::Restaurant.name
    description = Faker::Restaurant.description
    street_address = Faker::Address.street_address
    zip = Faker::Address.zip
    Place.create(name: name, description: description, street_address: street_address, zip: zip)
end

def create_company
    name_prefix = Faker::Company.name
    name_suffix = Faker::Company.industry
    name = name_prefix + " " + name_suffix
    street_address = Faker::Address.street_address
    zip = Faker::Address.zip
    business_prefix = Faker::Company.catch_phrase 
    business_suffix_1 = Faker::Company.buzzword
    business_suffix_2 = Faker::Company.buzzword
    business_motto = Faker::Company.bs 
    separator = [" | ", " . ", " ~ ", " / ", " ... "].sample
    description = business_prefix + separator + business_suffix_1 + separator + business_suffix_2 + separator + business_motto
    Place.create(name: name, street_address: street_address, zip: zip, description: description)
end

sylwia = Person.create(name: "Sylwia", telephone_number: 9998888999, email: "igottherubybadge@ruby.com")

def create_people
    name = Faker::Name.name_with_middle
    telephone_number = Faker::PhoneNumber.phone_number
    email = Faker::Internet.email
    Person.create(name: name, telephone_number: telephone_number, email: email)
end

10.times do 
    create_restaurant
    create_company
    create_restaurant
    create_people
end

visit1 = Visit.create(length: 30, person: Person.first, place: Place.first)
visit2 = Visit.create(length: 45, person: Person.first, place: Place.second)
visit3 = Visit.create(length: 30, person: Person.second, place: Place.second)
visit4 = Visit.create(length: 45, person: Person.third, place: Place.second)




puts "🏖 seeding ended"