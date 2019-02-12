class ShowCocktailSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :directions, :liquor_parts, :other_ingredients, :logged_in, :signed_in, :locations


  def liquor_parts
    parts = []
    object.liquor_parts.each do |liquor_part|
      parts << {name: liquor_part.liquor.name, unit: liquor_part.unit, amount: liquor_part.amount, id: liquor_part.id}
    end
    return parts
  end

  def other_ingredients
    object.other_ingredients
  end

  def logged_in
    if current_user
      current_user.id === object.user_id
    else
      false
    end
  end

  def locations
    object.locations
  end

  def signed_in
    if current_user
      {bool: true, user: current_user.id}
    else
      {bool: false, user: nil}
    end
  end
end
