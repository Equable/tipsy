class CreateSpiritSubtypes < ActiveRecord::Migration[5.2]
  def change
    create_table :spirit_subtypes do |t|
      t.string :name, null:false
      t.belongs_to :spirit, null:false
    end
  end
end
