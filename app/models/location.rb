class Location < ApplicationRecord
  has_many :cocktail_reviews
  has_many :cocktails, through: :cocktail_reviews

  validates :location, presence: true
  validates_uniqueness_of :location, :case_sensitive => false
end