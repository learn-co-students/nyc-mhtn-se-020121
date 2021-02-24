# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ako_sushi = Place.create(name: "Ako Sushi", street_address: "9478634374 Bleecker Ave", zip: 11237, description: "this is a wonderful place")

heavenly_scent = Place.create(name: "Heavenyl Scent Laundromat", street_address: "1000 Hart St", zip: 11237, description: "a bit dodgy and a health hazard but open 24/7")

puts "🏖 seeding ended"