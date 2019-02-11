class LiquorPartSerializer < ActiveModel::Serializer
  attributes :id, :cocktail_id, :name, :amount, :unit

  def name
    object.liquor.name
  end
end
