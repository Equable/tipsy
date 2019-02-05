class CreateGeneralParts < ActiveRecord::Migration[5.2]
  def change
    create_table :general_parts do |t|
      t.belongs_to :cocktail
      t.belongs_to :general_ingredient
      t.float :amount, null: false
      t.string :unit, null: false
    end
  end
end
