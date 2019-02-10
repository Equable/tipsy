class CreateOtherIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :other_ingredients do |t|
      t.string :name, null: false
      t.float :amount, null:false
      t. string :unit, null: false
      t.belongs_to :cocktail
    end
  end
end
