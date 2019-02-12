require 'rails_helper'

RSpec.describe Cocktail, type: :model do
  describe 'validations' do
    let!(:cocktail){ FactoryBot.create(:cocktail)}
    it { should have_many(:liquor_parts)}
    it { should have_many(:liquors) }
    it { should have_many(:other_ingredients) }
    it { should have_many(:cocktail_reviews) }
    it { should have_many(:locations) }
    
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name).ignoring_case_sensitivity}
  end
end
