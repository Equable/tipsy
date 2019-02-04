class LiquorPart < ApplicationRecord
  belongs_to :liquor
  belongs_to :cocktail

  validates :cocktail_id, presence: true
  validates :liquor_id, presence: true
  validates_uniqueness_of :liquor_id, scope: :cocktail_id
  validates :amount, presence: true
  validates :unit, presence: true
end