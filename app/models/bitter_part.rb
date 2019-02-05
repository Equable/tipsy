class BitterPart < ApplicationRecord
  belongs_to :cocktail
  belongs_to :bitter

  validates :cocktail_id, presence: true
  validates :bitter_id, presence: true
  validates :drops, presence: true, :numericality => { :greater_than_or_equal_to => 0}
  validates_uniqueness_of :bitter_id, scope: :cocktail_id
end