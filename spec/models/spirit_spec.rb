require 'rails_helper'

RSpec.describe Spirit, type: :model do
  it { should validate_presence_of(:name) }
  it { should have_many(:spirit_subtypes) }
  it { should have_many(:liquors) }
  it { should have_many(:liquor_parts) }
  it { should have_many(:cocktails) }
end
