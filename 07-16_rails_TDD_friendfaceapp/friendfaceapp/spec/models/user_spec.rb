require 'rails_helper'

describe User do

	# it 'responds to username' do
	# 	user = User.create
	# 	# we expect a user that we create to have a username
	# 	expect(user).to respond_to :username
	# end

	# this one line is the same as the 5 lines above, checking that a username exists
	it { is_expected.to respond_to :username }

	# testing for posts
	it { is_expected.to have_many :posts }

	# describe 'username' do
	# 	it 'can not be blank' do
	# 		invalid_username = User.create(username:"")

	# 		# we expect a user's username to not be blank
	# 		expect(invalid_username).to_not be_valid
	# 	end

	# 	# write a test for a username to have at least 2 characters
	# 	it 'has at least 2 characters' do 
	# 		# expect username length to be equal or greater than 2
	# 		# I feel like this isn't a great test, but it will cover one use case. Hmm...
	# 		invalid_username = User.create(username:"a")
	# 		expect(invalid_username).to_not be_valid

	# 	end

	# end

	# this chunk of code is the same as the above chunk of code
	describe 'username when it is invalid' do
		subject(:invalid_username) { User.create(username:"") }

		it { is_expected.to_not be_valid }
		it { is_expected.to_not be_valid }
	end

	describe 'email address' do
		it 'can not be blank' do
			invalid_email = User.create(username:"hello",email:"")

			# we expect a user's email to not be blank
			expect(invalid_email).to_not be_valid
		end


	end

	

end

