class Cocktail < ApplicationRecord
  has_many :liquor_parts
  has_many :liquors, through: :liquor_parts
  has_many :other_ingredients
  has_many :cocktail_reviews
  has_many :locations, through: :cocktail_reviews
  
  validates :name, presence: true, uniqueness: true
  validates_uniqueness_of :name, :case_sensitive => false
end