class ShowCocktailSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :directions, :liquor_parts, :other_ingredients


  def liquor_parts
    parts = []
    object.liquor_parts.each do |liquor_part|
      parts << {name: liquor_part.liquor.name, unit: liquor_part.unit, amount: liquor_part.amount }
    end
    return parts
  end

  def other_ingredients
    object.other_ingredients
  end
end
