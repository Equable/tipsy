class CocktailReview < ApplicationRecord
  belongs_to :cocktail
  belongs_to :user
  belongs_to :location

  validates :rating, presence: true, :numericality => { :greater_than_or_equal_to => 0, :less_than_or_equal_to => 5 }
end