class Api::V1::LiquorPartController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create

    if liquor.save
      render json: liquor
    else
      render json: {error: liquor.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def liquor_params
    params.require(:liquor_part).permit(:name, :subtype)
  end
end
