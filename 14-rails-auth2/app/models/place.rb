class Place < ApplicationRecord
    has_many :visits, dependent: :destroy
    has_many :users, through: :visits

    default_scope {order('name ASC')}

    def name_and_address
        name.titleize + "(#{street_address}, NY #{zip})"
    end



end
