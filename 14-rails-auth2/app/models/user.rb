class User < ApplicationRecord

  has_many :visits, dependent: :destroy
  has_many :places, through: :visits

  has_secure_password #validates: false

end
