class Person < ActiveRecord::Base
	has_many :shoes, dependent: :destroy
	# dependent is the key, and destroy is the ??
	# this is a hash
end
