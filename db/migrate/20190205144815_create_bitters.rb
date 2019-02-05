class CreateBitters < ActiveRecord::Migration[5.2]
  def change
    create_table :bitters do |t|
      t.string :name, null: false
      t.string :brand, null: false
      t.string :made_at
    end
  end
end
