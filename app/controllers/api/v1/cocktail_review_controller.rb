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
      location = Location.find_by location: review["location"]
      if !location
        review["location"] = Location.create({location: review["location"]})
      else
        review["location"] =location
      end
      newReview = CocktailReview.new(review)
      if newReview.save
        render json: newReview, serializer: CocktailReviewSerializer
      else
        render json: {error: newReview.errors.full_messages}, status: :unprocessable_entity
      end
    else
      render json: {error: "Please Sign In"}
    end
  end

  def update
    review = permit_review
    location = Location.find_by location: review["location"] unless review["location"] === "" 
    if !location
      review["location"] = Location.create({location: review["location"]})
    else
      review["location"] = location
    end
    if current_user.id === params["user_id"]
      if CocktailReview.update(params[:id], review)
        render status: 200, json: review
      end
    else
      render status: 406, json: review
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