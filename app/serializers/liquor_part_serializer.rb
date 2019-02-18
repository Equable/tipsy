class LiquorPartSerializer < ActiveModel::Serializer
  attributes :id, :cocktail_id, :name, :amount, :unit, :spirit, :subtype

  def name
    object.liquor.name
  end

  def spirit
    object.liquor.spirit.name
  end

  def subtype
    object.liquor.spirit_subtype.name
  end
end
