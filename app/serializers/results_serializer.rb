class ResultsSerializer < ActiveModel::Serializer
  attributes :liquors
  def liquors
    object[:liquor].to_a.map do |liquor|
      LiquorSerializer.new(liquor)
    end
  end
end
