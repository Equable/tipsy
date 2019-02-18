class Api::V1::LiquorPartController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  
  def create
    liquor = liquor_part_params
    liquor_found = find_liquor_or_create(liquor)
    liquor_part = LiquorPart.new({liquor:liquor_found, amount: liquor["amount"], cocktail_id: liquor["cocktail_id"]})
    if liquor_part.save
      render json: liquor_part
    else
      render json: {error: liquor_part.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def liquor_datalist
    liquor = liquor_list_params
    liquors = search_liquors(liquor)
    render json: liquors
  end

  def destroy
    liquor= LiquorPart.find(params["id"].to_i)
    if liquor.cocktail.user_id === current_user.id
      if liquor.delete
        render status: 202, json: {junk: "dont look im naked!"}
      end
    else
      render status: 404, json: {junk: "woopsie poopsy"}
    end
  end

  private

  def find_liquor_or_create(liquor)
    binding.pry
    liquor_name = liquor["name"].gsub("'"){"\'"}
    liquor_name = "Any" if liquor_name === ""
    liquor_subtype= liquor["subtype"]
    liquor_brand = liquor["brand"].gsub("'"){"\'"}
    liquor_spirit = liquor["spirit_id"]
    liquors = Liquor.arel_table
    if liquor_subtype==""
      liquor_subtype = generic_spirit_subtype(liquor)
      liquors = Liquor.where(liquors[:name].eq("#{liquor_name}").and(liquors[:spirit_id].eq(liquor_spirit.to_i)))
    else
      liquors = Liquor.where(liquors[:name].eq("#{liquor_name}").and(liquors[:spirit_subtype_id].eq(liquor_subtype.to_i)) ).limit(5)
    end
    if liquors.any?
      return liquors.first
    else
      liquor_brand = "Any" if liquor_brand == ""
      new_liquor= Liquor.new({name: liquor_name, brand: liquor_brand, spirit_subtype_id: liquor_subtype, spirit_id:liquor_spirit})
      if new_liquor.save
        return new_liquor
      else
        render json: {error: liquor.errors.full_messages}, status: :unprocessable_entity
      end
    end
  end

  def search_liquors(liquor)
    liquor_name = liquor["name"].gsub("'"){"\'"}
    liquor_subtype= liquor["subtype"]
    liquor_spirit = liquor["spirit_id"]
    liquors = Liquor.arel_table
    if liquor_subtype==""
      liquors = Liquor.where(liquors[:name].matches("%#{liquor_name}%").and(liquors[:spirit_id].eq(liquor_spirit.to_i)) ).limit(5)
    else
      liquors = Liquor.where(liquors[:name].matches("%#{liquor_name}%").and(liquors[:spirit_subtype_id].eq(liquor_subtype.to_i)) ).limit(5)
    end
  end

  def generic_spirit_subtype(liquor)
    spirit_subtypes = SpiritSubtype.arel_table
    liquor_spirit = liquor["spirit_id"]
    spirit_subtype = SpiritSubtype.where(spirit_subtypes[:name].matches("Any").and(spirit_subtypes[:spirit_id].eq(liquor_spirit.to_i)) ).first
    id = spirit_subtype.id
  end

  def liquor_list_params
    params.require(:liquor).permit(:name, :subtype, :spirit_id)
  end

  def liquor_params
    params.require(:liquor_part).permit(:name, :subtype)
  end

  def liquor_part_params
    params.require(:liquor_part).permit(:name, :subtype, :brand, :amount, :cocktail_id, :spirit_id)
  end
end
