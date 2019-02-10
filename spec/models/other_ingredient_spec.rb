require 'rails_helper'

RSpec.describe OtherIngredient, type: :model do
  describe 'validations' do
    it { should belong_to(:cocktail) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:amount) }
    it { should validate_numericality_of(:amount)}
    it { should validate_presence_of(:unit)}
    it { should validate_presence_of(:cocktail_id)}
  end
end
