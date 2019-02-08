class Api::V1::SearchController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    query = ActionController::Base.helpers.sanitize(params["search"]["query"])
    spirits = spirit_query(query)
    liquors = liquor_query(query)
    cocktails = cocktail_query(query)
    cocktails = iterate_add_cocktails(spirits, cocktails).map do |cocktail|
      CocktailSerializer.new(cocktail)
    end
    render json: {spirit: spirits, liquors:liquors, cocktails:cocktails }
  end

  private

  def spirit_query(query)
    spirits = Spirit.arel_table
    spirits = Spirit.where(spirits[:name].matches("%#{query}%"))
  end

  def liquor_query(query)
    liquors = Liquor.arel_table
    liquors = Liquor.where(liquors[:name].matches("%#{query}%")).map do |liquor|
      LiquorSerializer.new(liquor)
    end
  end

  def cocktail_query(query)
    cocktails = Cocktail.arel_table
    cocktails = Cocktail.where(cocktails[:name].matches("%#{query}%"))
  end

  def iterate_add_cocktails(spirits, cocktails)
    spirits.each do |spirit|
      cocktails = (cocktails + spirit.cocktails).uniq
    end
    return cocktails
  end
end
