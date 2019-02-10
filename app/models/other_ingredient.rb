class OtherIngredient < ApplicationRecord
  belongs_to :cocktail

  validates :name, presence: true
  validates :amount, presence: true, :numericality => { :greater_than_or_equal_to => 0}
  validates :unit, presence: true
  validates :cocktail_id, presence: true
end