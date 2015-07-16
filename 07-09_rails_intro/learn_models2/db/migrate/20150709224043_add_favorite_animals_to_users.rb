class AddFavoriteAnimalsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :fav_animal, :string
  end
end
