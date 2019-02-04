require 'rails_helper'

RSpec.describe Cocktail, type: :model do
  it { should validate_presence_of(:name) }
  it { should have_many(:liquor_parts)}
end
