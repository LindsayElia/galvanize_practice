class RenameUsersColumnAgeToHoroscope < ActiveRecord::Migration
  def change
  	rename_column :users, :age, :horoscope
  end
end
