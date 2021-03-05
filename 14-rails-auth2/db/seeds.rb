User.create(username: "Eric", age: rand(10), password: "abc123")
User.create(username: "Sean", age: rand(10), password: "abc123")

def create_restaurant
    name = Faker::Restaurant.name
    description = Faker::Restaurant.description
    street_address = Faker::Address.street_address
    zip = Faker::Address.zip
    Place.create(name: name, description: description, street_address: street_address, zip: zip)
end

10.times do 
    create_restaurant
end

visit1 = Visit.create(length: 30, user: User.first, place: Place.first)
visit2 = Visit.create(length: 45, user: User.first, place: Place.second)
visit3 = Visit.create(length: 30, user: User.second, place: Place.second)