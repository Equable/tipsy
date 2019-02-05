class CreateBitterParts < ActiveRecord::Migration[5.2]
  def change
    create_table :bitter_parts do |t|
      t.belongs_to :cocktail, null: false
      t.belongs_to :bitter, null: false
      t.integer :drops, :limit => 2, null: false
    end
  end
end
