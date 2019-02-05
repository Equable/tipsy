class CreateLiquorParts < ActiveRecord::Migration[5.2]
  def change
    create_table :liquor_parts do |t|
      t.belongs_to :cocktail, null: false
      t.belongs_to :liquor, null: false
      t.float :amount, null: false
      t.string :unit, null: false, default: "oz"
    end
  end
end
