class Api::V1::MapController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  
  def show
    locations_array = Cocktail.find(params[:id]).locations
    locations =[]
    locations_array.each do |location|
      client = GooglePlaces::Client.new('AIzaSyCmQl6eqd9coXYpi2CSyn3qmShPrwAy7wE')
      name = location.location
      query = client.spots_by_query(name).first
      lat = query.lat
      lng = query.lng
      locations << {name: name, lat: lat, lng: lng}
    end

    render json: locations
  end 

end