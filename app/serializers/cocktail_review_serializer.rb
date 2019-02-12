class CocktailReviewSerializer < ActiveModel::Serializer
  attributes :user, :rating, :body, :cocktail_id, :id, :location

  def user
    {name: object.user.username, user_id: object.user.id }
  end
  
  def location
    object.location
  end
end