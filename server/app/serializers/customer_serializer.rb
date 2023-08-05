class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  has_many :search_histories
end
