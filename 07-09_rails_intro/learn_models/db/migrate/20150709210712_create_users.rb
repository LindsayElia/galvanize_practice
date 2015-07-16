class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end

# if I run this migration, it will create the table
# if I roll back this migration, it will drop the table
# a migration is a file that, when run, will make a change to your database


# instead of:
# class Dog < Animal < Methods1 + Methods 2
# we can make a module:

	# module ActiveRecord
	# 	# This (Migration) is a constant. Constants include: classes, modules, and constants.
	# 	class Migration		
	# 	end
	# 	def Hello
	# 		puts "hi"
	# 	end
	# end

# a constant inside of a module can ONLY be accessed using the :: syntax
# lets us make a new instance of the Migration classes
	# migration = ActiveRecord::Migration.new()

# to access methods (such as Hello, above) inside of module ActiveRecord in other parts of my program,
# I write `include ActiceRecord`