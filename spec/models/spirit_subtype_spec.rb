require 'rails_helper'

RSpec.describe SpiritSubtype, type: :model do
  describe 'validations' do
    let!(:thing){ FactoryBot.create(:spirit_subtype) }
    it { should have_many(:liquors) }
    it { should have_many(:liquor_parts) }
    it { should have_many(:cocktails) }
    it { should belong_to(:spirit) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:spirit_id) }
    it { should validate_uniqueness_of(:name).scoped_to(:spirit_id).ignoring_case_sensitivity }
  end
end
