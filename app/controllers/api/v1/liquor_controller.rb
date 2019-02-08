class Api::V1::LiquorController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  
  def new
    spirits = Spirit.all
    render json: spirits
  end

  def spirit_subtypes
    spirit_subtypes = SpiritSubtype.where(spirit_id: params["liquor_id"].to_i)
    render json: spirit_subtypes
  end

  def create
    liquor = Liquor.new(liquor_params)
    if liquor.save
      render json: liquor
    else
      render json: {error: liquor.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def liquor_params
    params.require(:liquor).permit(:name, :brand, :proof, :made_at, :spirit_subtype_id)
  end
end