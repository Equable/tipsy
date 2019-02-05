require 'rails_helper'

RSpec.describe Cocktail, type: :model do
  it { should have_many(:liquor_parts)}
  it { should have_many(:liquors) }
  it { should have_many(:general_parts) }
  it { should have_many(:general_ingredients) }
  it { should have_many(:bitter_parts) }
  it { should have_many(:bitters) }
  
  it { should validate_presence_of(:name) }

end
