class CreateCocktails < ActiveRecord::Migration[5.2]
  def change
    create_table :cocktails do |t|
      t.string :name, null: false
      t.text :image_url
      t.text :directions
      t.belongs_to :user
    end
  end
end
