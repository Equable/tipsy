require 'rails_helper'

RSpec.describe Liquor, type: :model do
  describe 'validations' do
    let!(:thing) { FactoryBot.create(:liquor)}
    it { should have_many(:liquor_parts) }
    it { should have_many(:cocktails)}
    it { should belong_to(:spirit_subtype) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:brand) }
    it { should validate_uniqueness_of(:name).scoped_to(:brand, :spirit_subtype_id).ignoring_case_sensitivity }
    it { should validate_numericality_of(:proof)}
  end
end
