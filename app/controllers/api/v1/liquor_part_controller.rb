class Api::V1::LiquorPartController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    liquor = liquor_part_params
    liquor_found = search_liquors(liquor).first
    liquor_part = LiquorPart.new({liquor:liquor_found, amount: liquor["amount"], cocktail_id: liquor["cocktail_id"]})
    binding.pry
    if liquor.save
      render json: liquor
    else
      render json: {error: liquor.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def liquor_datalist
    liquor = liquor_list_params
    liquors = search_liquors(liquor)
    render json: liquors
  end

  private

  def search_liquors(liquor)
    liquor_name =liquor["name"]
    liquor_subtype= liquor["subtype"]
    liquors = Liquor.arel_table
    if liquor_subtype==""
      liquors = Liquor.where(liquors[:name].matches("%#{liquor_name}%") ).limit(5)
    else
      liquors = Liquor.where(liquors[:name].matches("%#{liquor_name}%").and(liquors[:spirit_subtype_id].eq(liquor_subtype.to_i)) ).limit(5)
    end
  end

  def liquor_list_params
    params.require(:liquor).permit(:name, :subtype)
  end

  def liquor_params
    params.require(:liquor_part).permit(:name, :subtype)
  end

  def liquor_part_params
    params.require(:liquor_part).permit(:name, :subtype, :brand, :amount, :cocktail_id)
  end
end
