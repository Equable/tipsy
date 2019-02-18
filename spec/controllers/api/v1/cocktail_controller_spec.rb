require 'rails_helper'
require 'json'

RSpec.describe Api::V1::CocktailController, type: :controller do
  describe 'validations' do
    let!(:cocktail) { FactoryBot.create(:cocktail)}
    it 'should receive cocktail info' do
      get :show, params: {id: cocktail.id }
      json = JSON.parse(response.body)
      expect(json["name"]).to eq(cocktail.name)
      expect(json["id"]).to eq(cocktail.id)
      expect(json["directions"]).to eq(cocktail.directions)
    end

    it 'should use a serializer to show ingredients and liquors' do
      get :show, params: {id: cocktail.id }
      keys = JSON.parse(response.body).keys
      expect(keys).to include("liquor_parts")
      expect(keys).to include("other_ingredients")
      expect(keys).to include("locations")
    end
  end
end
