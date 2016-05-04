class City < ActiveRecord::Base
  validates :city, presence: true
end
