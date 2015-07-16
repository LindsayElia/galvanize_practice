class User < ActiveRecord::Base
	validates :age, presence: true
	# takes in a number of arugments, in this case, just :age
	# presence true says to check that it exists
end
