class Cocktail < ApplicationRecord
  has_many :liquor_parts
  has_many :liquors, through: :liquor_parts
  has_many :general_parts
  has_many :general_ingredients, through: :general_parts
  has_many :bitter_parts
  has_many :bitters, through: :bitter_parts
  
  validates :name, presence: true
end