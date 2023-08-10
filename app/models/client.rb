
class Client < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 5, allow_nil: true }

  attr_reader :password

  def password=(raw)
    @password = raw
    self.password_digest = BCrypt::Password.create(raw)
  end

  def is_password?(raw)
    BCrypt::Password.new(password_digest).is_password?(raw)
  end
end
