class GeneralIngredient < ApplicationRecord
  has_many :general_parts
  has_many :cocktails, through: :general_parts

  validates :name, presence: true
  validates_uniqueness_of :name, :case_sensitive => false
end