class Vendor < ApplicationRecord

    has_many :vendor_sweets 
    has_many :sweets, through: :vendor_sweets

    def average_price 
        prices = vendor_sweets.map(&:price)
        if prices.sum == 0 
            0
        else 
            prices.sum / prices.count
        end 
    end 

end
