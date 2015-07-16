class CreateYoyos < ActiveRecord::Migration
  def change
    create_table :yoyos do |t|
      t.string :name
      t.string :url

      t.timestamps null: false
    end
  end
end
