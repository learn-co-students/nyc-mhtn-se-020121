# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Place.destroy_all

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

10.times do 
    create_restaurant
    create_company
    create_restaurant
end


puts "🏖 seeding ended"