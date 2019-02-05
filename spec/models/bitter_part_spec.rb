require 'rails_helper'

RSpec.describe BitterPart, type: :model do
  describe 'validations' do
    let!(:bitter_part) { FactoryBot.create(:bitter_part) }
    it { should belong_to(:cocktail) }
    it { should belong_to(:bitter) }
    it { should validate_presence_of(:cocktail_id) }
    it { should validate_presence_of(:bitter_id) }
    it { should validate_presence_of(:drops) }
    it { should validate_numericality_of(:drops) }
    it { should validate_uniqueness_of(:bitter_id).scoped_to(:cocktail_id) }
  end
end
