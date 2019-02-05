require 'rails_helper'

RSpec.describe GeneralIngredient, type: :model do
  describe 'validations' do
    let!(:general_ingredient) { FactoryBot.create(:general_ingredient)}
    it { should have_many(:general_parts) }
    it { should have_many(:cocktails) }
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name).ignoring_case_sensitivity }
  end
end
