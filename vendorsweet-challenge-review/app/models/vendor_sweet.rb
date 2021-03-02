class VendorSweet < ApplicationRecord
  belongs_to :vendor
  belongs_to :sweet

  validates :price, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0 }

  validates :vendor, uniqueness: { scope: :sweet,
    message: "is already selling this sweet" }

  def self.average_price 
    prices = all.map(&:price)
    if prices.sum == 0 
      0
    else 
      prices.sum / prices.count
    end 
  end 

end
