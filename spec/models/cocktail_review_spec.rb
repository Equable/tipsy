require 'rails_helper'

RSpec.describe CocktailReview, type: :model do
  it { should belong_to(:cocktail) }
  it { should belong_to(:user) }
  it { should validate_presence_of(:rating) }
  it { should validate_numericality_of(:rating)}
end
