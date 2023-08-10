class Customer < ApplicationRecord
    has_secure_password 

    validates :name, :email, presence: :true
    validates :email, uniqueness: :true 

    has_many :search_histories, dependent: :destroy
end
