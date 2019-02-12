class Api::V1::AuthController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    if current_user
      render json: {loggedIn: true, user: current_user.id, username: current_user.username}
    else
      render json: {loggedIn: false, user: nil, username: nil}
  end
end