require "pry"

cooper = {
    "name": "Dale Bartholomew Cooper",
    "co-workers": ["Diane", "Sheriff Harry S. Truman"],
    "favorite_drink": "Coffee",
    "Quotes": [
        "Damn fine cup of coffee", "Diane...",
        "This must be where pies go when they die",
        "That's what you do in a town where a yellow light still means slow down, not go faster.",
        "Every day, once a day, give yourself a present",
        "I have no idea where this will lead us, but I have a definite feeling it will be a place both wonderful and strange."
        ]
    }

def print_rando_quote array
    puts array.sample
end 

print_rando_quote cooper[:Quotes]

# binding.pry