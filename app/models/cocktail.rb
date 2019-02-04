class Cocktail < ApplicationRecord
  has_many :liquor_parts
  
  validates :name, presence: true
end