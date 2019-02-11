class Api::V1::OtherIngredientController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    ingredient = OtherIngredient.new(ingredient_params)
    if ingredient.save
      render json: ingredient
    else
      render json: {error: liquor.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private 

  def ingredient_params
    params.require(:ingredient).permit(:name, :amount, :unit, :cocktail_id)
  end
end