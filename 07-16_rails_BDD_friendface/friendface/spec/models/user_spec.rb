require 'rails_helper'

describe User do

	it 'responds to username' do
		user = User.create

		# we expect a user that we create to have a username
		expect(user).to respond_to :username
	end

	describe 'username' do
		it 'can not be blank' do
			invalid_username = User.create(username:"")

			# we expect a user's username to not be blank
			expect(invalid_username).to_not be_valid
		end

		# write a test for a username to have at least 2 characters
		it 'has at least 2 characters' do 
			# expect username length to be equal or greater than 2
			# I feel like this isn't a great test, but it will cover one use case. Hmm...
			invalid_username = User.create(username:"a")
			expect(invalid_username).to_not be_valid

		end

		# write a test making sure a username works


	end

	describe 'email address' do
		it 'can not be blank' do
			invalid_email = User.create(username:"hello",email:"")

			# we expect a user's email to not be blank
			expect(invalid_email).to_not be_valid
		end

		# write a test to make sure the email works???
		# it 'works???' do
			# ???
		# end

	end

	

















end

