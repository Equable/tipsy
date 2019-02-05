class GeneralPart < ApplicationRecord
  belongs_to :cocktail
  belongs_to :general_ingredient

  validates :cocktail_id, presence: true
  validates :general_ingredient_id, presence: true
  validates_uniqueness_of :general_ingredient_id, scope: :cocktail_id
  validates :amount, presence: true, :numericality => { :greater_than_or_equal_to => 0 }
  validates :unit, presence: true
end