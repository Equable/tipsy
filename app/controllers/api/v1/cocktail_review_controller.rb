class Api::V1::CocktailReviewController < ApplicationController
    protect_from_forgery unless: -> { request.format.json? }

  def show
    id = permit_cocktail_id["id"].to_i
    reviews = CocktailReview.where(cocktail_id: id)
    render json: reviews
  end

  def create
    if current_user
      review = permit_review
      review["user_id"] = current_user.id
      newReview = CocktailReview.new(review)
      if newReview.save
        render json: newReview, serializer: CocktailReviewSerializer
      else
        render json: {error: liquor_part.errors.full_messages}, status: :unprocessable_entity
      end
    else
      render json: {error: "Please Sign In"}
    end
  end

  def destroy
    review= CocktailReview.find(params["review_id"].to_i)
    if review.user_id === current_user.id
      if review.delete
        render status: 202, json: {junk: "dont look im naked!"}
      end
    else
      render status: 404, json: {junk: "woopsie poopsy"}
    end
  end

  private

  def permit_cocktail_id
    params.permit(:id)
  end

  def permit_review
    params.require(:review).permit(:rating, :cocktail_id, :body, :location)
  end
end