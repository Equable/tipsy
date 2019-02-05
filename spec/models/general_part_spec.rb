require 'rails_helper'

RSpec.describe GeneralPart, type: :model do
  describe 'validations' do
    let!(:general_part) { FactoryBot.create(:general_part)}
    it { should belong_to(:cocktail) }
    it { should belong_to(:general_ingredient) }
    it { should validate_presence_of(:cocktail_id) }
    it { should validate_presence_of(:general_ingredient_id) }
    it { should validate_uniqueness_of(:general_ingredient_id).scoped_to(:cocktail_id) }
    it { should validate_presence_of(:amount) }
    it { should validate_numericality_of(:amount) }
    it { should validate_presence_of(:unit) }
  end
end
