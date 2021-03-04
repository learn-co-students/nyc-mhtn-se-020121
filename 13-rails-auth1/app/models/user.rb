class User < ApplicationRecord
  has_secure_password #validates: false

end
