class Spirit < ApplicationRecord
  has_many :spirit_subtypes
  has_many :liquors, through: :spirit_subtypes
  
  validates :name, presence: true
end