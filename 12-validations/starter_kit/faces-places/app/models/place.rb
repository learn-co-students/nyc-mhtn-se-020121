class Place < ApplicationRecord
    has_many :visits, -> { order ('length DESC') }, dependent: :destroy
    has_many :people, through: :visits

    def name_and_address
        name.titleize + "(#{street_address}, NY #{zip})"
    end

    default_scope {order('name ASC')}

end
