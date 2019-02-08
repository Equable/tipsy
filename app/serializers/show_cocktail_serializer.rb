class ShowCocktailSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :directions
end
