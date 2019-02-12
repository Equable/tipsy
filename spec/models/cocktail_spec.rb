require 'rails_helper'

RSpec.describe Cocktail, type: :model do
  it { should have_many(:liquor_parts)}
  it { should have_many(:liquors) }
  it { should have_many(:other_ingredients) }
  it { should have_many(:cocktail_reviews) }
  
  it { should validate_presence_of(:name) }

end
