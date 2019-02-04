class SpiritSubtype < ApplicationRecord
  has_many :liquors
  
  belongs_to :spirit
  
  validates :name, presence: true
  validates :spirit_id, presence: true
  validates_uniqueness_of :name, scope: :spirit_id, :case_sensitive => false
end