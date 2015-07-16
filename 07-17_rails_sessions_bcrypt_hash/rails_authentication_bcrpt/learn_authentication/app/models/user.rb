class User < ActiveRecord::Base
	# validates :username, presence: true


	has_secure_password
	# this line is the same as:
	# attr_reader :password

 #    validates_presence_of :password, on: create
 #    validates_presence_of :password_confirmation
 #    validates_confirmation_of :password

 #    # methods
 #    authenticate(plain_text_password)
    
end
