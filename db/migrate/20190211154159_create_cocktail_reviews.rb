class CreateCocktailReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :cocktail_reviews do |t|
      t.belongs_to :cocktail
      t.belongs_to :user
      t.integer :rating, null: false
      t.text :body, null: false
      t.string :location
      t.timestamps
    end
  end
end
