class CreateShoes < ActiveRecord::Migration
  def change
    create_table :shoes do |t|
      t.string :brand
      t.integer :size
      t.integer :person_id

      t.timestamps null: false
    end
  end
end
