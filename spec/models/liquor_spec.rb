require 'rails_helper'

RSpec.describe Liquor, type: :model do
  describe 'validations' do
    let!(:thing) { FactoryBot.create(:liquor)}
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:brand) }
    it { should belong_to(:spirit_subtype) }
    it { should validate_numericality_of(:proof)}
    it { should validate_uniqueness_of(:name).scoped_to(:brand).ignoring_case_sensitivity }
  end
end
