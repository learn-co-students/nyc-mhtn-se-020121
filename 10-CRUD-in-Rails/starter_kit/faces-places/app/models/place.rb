class Place < ApplicationRecord

    def name_and_address
        "#{name}: #{street_address}, #{zip} NYC"
    end
end
