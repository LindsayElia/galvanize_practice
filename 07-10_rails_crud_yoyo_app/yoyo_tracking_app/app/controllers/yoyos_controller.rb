class YoyosController < ApplicationController

	# we have to add this, so our route can find index. This gives our route index and 
	# redirects it to our index.html.erb file.
	# render the index page
	def index		
		
		# Yoyo.all is the SQL equivalent of `SELECT * FROM yoyos`
		# yoyos = Yoyo.all 
		
		# find the yoyo with the id of 1
		# my_yoyo = Yoyo.find(1)

		# using `render html:...` is temporary, just to test that it's rendering correctly,
		# we'd use this to check if our view was complicated before starting to work on it, or
		# to troubleshoot
		# render html: "Rendering the index page. This is my first yoyo: #{my_yoyo.name}. This is " +
		# "another way of writing the name: #{yoyos[0].name}. The url is #{yoyos[0].url}." 
		
		# pass it as an INSTANCE VARIABLE into our view file
		# why do this here, rather than in view?
		# we should do our logic here in the controller, not in the view.
		# views should only take variables and display them. keep views as simple as possible.
		@yoyos = Yoyo.all 

		# note: the colon goes in front of `index` because it's a symbol and `render` is a method
		# and NOT at the end of render
		render :index

	end


	# return a page that has a form to create a new yoyo
	def new
		# create a new object for the yoyo with no data inside of it,
		# so that rails can figure out what type of data the yoyo will have
		@yoyo = Yoyo.new	# we write `new` here to make the object in memory, but NOT save it into the database
							# we're just making an ActiveRecord object for our model,
							# NOT saving an object to our database
	end

	# @yoyo.name = yoyo[name]



	def create
		# binding.pry
		name = params[:yoyo][:name]	 # params is just a hash, both yoyo and name come from our form input field names
		url = params[:url]			# I used two diff syntaxes in my form, these are the two that match up

		# this would also work, but it's not secure, and so rails will break if we try it this way:
			# yoyo_params = params[yoyo]
		# it's not secure because we'd be getting ALL of the data that the page passes in, rather
		# than just the 2 values we specify, and a user could add a bunch of things that are malicious

		# another option is to use `require` and `permit`
		# instead of explicitly getting each thing (we did in the first two lines above)
			# yoyo_params = params.require(:yoyo).permit(:name, url)
		# :yoyo must be present as a key
		# we're only permitting, or allowing, these two things, :name and :url

		Yoyo.create( name: name, url: url )
		# with the 3rd option, we'd use
			# Yoyo.create( yoyo_params )
		# down here instead

		redirect_to '/'
	end


	def update
		@yoyo = Yoyo.find(params[:id])	# rember, params gets info both from the params and the body
		# how to make sure we don't get an error?
		# using find_by_id will return nil, but then will error out on the next line anyway
		@yoyo.update(yoyo_params)
		redirect_to '/'
 	end


 	def edit
 		@yoyo = Yoyo.find(params[:id])
 	end


 	def show
 		@yoyo = Yoyo.find(params[:id])
 	end


 	def destroy
 		@yoyo = Yoyo.find(params[:id])
 		@yoyo.destroy
 		redirect_to '/'
 	end


	# OR, a 4th option is, we could make it into a private method call
	# only this file will have access to it, 
	# and no other files (controllers, for example) in our app will have access
	# all the other methods in this `YoyosController class` have access to these methods
	private
		def yoyo_params
			params.require(:yoyo).permit(:name, url)
		end
	# no end closing tag for private
	# private is not a class, it's just designating all these methods as private

end
