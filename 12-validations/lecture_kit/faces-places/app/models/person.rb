class Person < ApplicationRecord
    has_many :visits
    has_many :places, through: :visits
end
