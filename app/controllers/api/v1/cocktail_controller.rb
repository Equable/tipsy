class Api::V1::CocktailController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    cocktail = Cocktail.find(params["id"])
    if cocktail
      render json: cocktail, serializer: ShowCocktailSerializer
    end
  end

  def create 
    cocktail = Cocktail.new(cocktail_params)
    if cocktail.save
      render json: {cocktail: cocktail}
    else
      render json: {error: cocktail.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def liquor_parts

  end

  private 

  def cocktail_params
    params.require(:cocktail).permit(:name, :image_url, :directions)
  end
end