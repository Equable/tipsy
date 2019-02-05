class CreateGeneralIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :general_ingredients do |t|
      t.string :name, null: false
    end
  end
end
