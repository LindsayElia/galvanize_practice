class ZoosController < ApplicationController
 
	before_action :find_zoo, only: [:show, :edit, :update, :destroy]

	def index
		@zoos = Zoo.all
	end

	def new
		@zoo = Zoo.new
	end

	def show
	end

	def edit
	end

	def create
		@zoo = Zoo.create zoo_params
		# flash message code here
		redirect_to zoos_path
	end

	def update
		# find_zoo
		@zoo.update( zoo_params )
		if(@zoo.save)
			redirect_to zoos_path
		else
			render :edit
		end
	end

	def destroy
		# find_zoo
		@zoo.destroy
		redirect_to zoos_path
	end


	private

		def find_zoo
			@zoo = Zoo.find(params[:id])
		end

		def zoo_params
			params.require(:zoo).permit(:name, :location, :year_opened)
		end

end
