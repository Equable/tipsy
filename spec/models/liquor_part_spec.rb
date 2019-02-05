require 'rails_helper'

RSpec.describe LiquorPart, type: :model do
  describe 'validations' do
    let!(:thing) { FactoryBot.create(:liquor_part)}
    it { should belong_to(:cocktail) }
    it { should belong_to(:liquor) }
    it { should validate_presence_of(:cocktail_id) }
    it { should validate_presence_of(:liquor_id) }
    it { should validate_presence_of(:amount) }
    it { should validate_presence_of(:unit) }
    it { should validate_uniqueness_of(:liquor_id).scoped_to(:cocktail_id) }
  end
end
