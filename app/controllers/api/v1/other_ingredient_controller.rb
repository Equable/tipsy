class Api::V1::OtherIngredientController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    ingredient = OtherIngredient.new(ingredient_params)
    if ingredient.save
      render json: ingredient
    else
      render json: {error: ingredient.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    ingredient= OtherIngredient.find(params["id"].to_i)
    if ingredient.cocktail.user_id === current_user.id
      if ingredient.delete
        render status: 202, json: {junk: "dont look im naked!"}
      end
    else
      render status: 404, json: {junk: "woopsie poopsy"}
    end
  end
  private 

  def ingredient_params
    params.require(:ingredient).permit(:name, :amount, :unit, :cocktail_id)
  end
end