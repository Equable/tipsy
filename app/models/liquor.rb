class Liquor < ApplicationRecord
  has_many :liquor_parts
  has_many :cocktails, through: :liquor_parts
  
  belongs_to :spirit_subtype
  belongs_to :spirit
  
  validates :name, presence: true
  validates :brand, presence: true
  validates_uniqueness_of :name, scope: [:brand, :spirit_subtype_id], :case_sensitive => false
  validates :proof, :numericality => { :greater_than_or_equal_to => 0 }
end