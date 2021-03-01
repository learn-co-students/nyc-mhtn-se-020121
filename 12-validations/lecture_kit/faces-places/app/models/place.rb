class Place < ApplicationRecord
    has_many :visits, -> { order ('length DESC') }, dependent: :destroy
    has_many :people, through: :visits
    validates :name, {presence: true, length: { in: 1..80}}
    validates :street_address, presence: true, format: { with: /[a-z\d\-_\s]/i, message: "only allows letters" }
    validates :zip, numericality: true, presence: true
    validates :description, uniqueness: true, length: { maximum: 160}
    # , format: { with: /\A[a-zA-Z]+\z/, message: "only allows letters" }
    # byebug

    def name_and_address
        name.titleize + "(#{street_address}, NY #{zip})"
    end

    default_scope {order('name ASC')}

end

# t.string "name"
# - max 80 characters, can’t be nil
# t.string "street_address"
# - Alphanumerical - max 160 characters, can’t be nil
# t.integer "zip"
# - numerical - no max number (international zip could change), can’t be nil
# t.string "description"
# - String max 160 characters, 
# - must be unique
