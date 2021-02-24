# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Sushi.destroy_all

# fancy expensive sushis only
50.times do 
    Sushi.create(
        name: Faker::Food.sushi,
        color: Faker::Color.color_name,
        price: Faker::Number.decimal(l_digits: 2, r_digits: 2)
    )
end 
