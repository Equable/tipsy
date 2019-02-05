class Bitter < ApplicationRecord
  has_many :bitter_parts
  has_many :cocktails, through: :bitter_parts

  validates :name, presence: true
  validates :brand, presence: true
  validates_uniqueness_of :name, scope: :brand, :case_sensitive => false
end