require 'rails_helper'

RSpec.describe Bitter, type: :model do
  describe 'validations' do
    let!(:thing) { FactoryBot.create(:bitter) }
    it { should have_many(:bitter_parts) }
    it { should have_many(:cocktails) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:brand) }
    it { should validate_uniqueness_of(:name).scoped_to(:brand).ignoring_case_sensitivity }
  end
end
