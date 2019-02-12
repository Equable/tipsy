require 'rails_helper'

RSpec.describe Location, type: :model do
  describe 'validations' do
    let!(:location) { FactoryBot.create(:location)}
    it { should have_many(:cocktail_reviews) }
    it { should have_many(:cocktails) }
    
    it { should validate_presence_of(:location) }
    it { should validate_uniqueness_of(:location).ignoring_case_sensitivity}
  end
end
