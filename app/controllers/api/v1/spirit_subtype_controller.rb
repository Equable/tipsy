class Api::V1::SpiritSubtypeController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  
  def new
    spirits = Spirit.all
    render json: spirits
  end

  def create
    subtype = SpiritSubtype.new(subtype_params)
    if subtype.save
      render json: subtype
    else
      render json: {error: subtype.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def subtype_params
    params.require(:subtype).permit(:name, :spirit_id)
  end
end