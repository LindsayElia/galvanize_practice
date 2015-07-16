class Vehicle

	attr_accessor :make, :model, :year

	def initialize(make, model, year)
		@make = make
		@model = model
		@year = year
	end

	def honk
		"quack!"
	end

	def add_one_year_to_model
		@year += 1
	end

end


class Car < Vehicle		# the single < (aka `shovel`) gives this class access
	# to all of the methods in the parent class, in this case, Vehicle
	# looks for a method in its superclass with that name
	# all objects in Ruby inherit classes from superclasses
	# up to the top, where the methods are top-most

	def initalize(make, model, year)
		super 		# this says, go to class above this (any class above / all parent classes)
		# and looks for the code INSIDE of initialize
		# so we don't need to type:
			# @make = make
			# @model = model
			# @year = year
	end

end