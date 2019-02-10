class LiquorPartSerializer < ActiveModel::Serializer
  attributes :id, :cocktail_id, :liquor, :amount, :unit

  def :liquor
    object.liquor
  end
end
