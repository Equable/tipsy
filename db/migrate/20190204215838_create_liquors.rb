class CreateLiquors < ActiveRecord::Migration[5.2]
  def change
    create_table :liquors do |t|
      t.string :name, null: false
      t.string :brand, null: false
      t.integer :proof, default: 40
      t.string :made_at
      t.belongs_to :spirit_subtype
      t.belongs_to :user
      t.belongs_to :spirit
    end
  end
end
