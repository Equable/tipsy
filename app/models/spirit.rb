class Spirit < ApplicationRecord
  has_many :spirit_subtypes
  has_many :liquors, through: :spirit_subtypes
  has_many :liquor_parts, through: :liquors
  has_many :cocktails, through: :liquor_parts
  
  validates :name, presence: true
end