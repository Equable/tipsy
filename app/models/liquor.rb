class Liquor < ApplicationRecord
  belongs_to :spirit_subtype
  
  validates :name, presence: true
  validates :brand, presence: true
  validates_uniqueness_of :name, scope: :brand, :case_sensitive => false
  validates :proof, :numericality => { :greater_than_or_equal_to => 0 }
end