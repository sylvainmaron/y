class Offer < ApplicationRecord
  has_many :bookings, dependent: :destroy
  belongs_to :user
  has_one :chatroom
end
