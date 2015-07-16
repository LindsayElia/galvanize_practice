class MyPerson

	attr_accessor :name, :age, :funny 	# putting it here makes it an accessible attribute,
			# which means that it can be changed outside of the function / the initilization of it
			# like we're doing on *lines 35 & 28* below

	# if I want to access things inside of the class itself, I use two @@
	# one @ refers to the instance
	# two @@ refers to the class

	@@people = 0

	def initialize(name, age, funny)	# need to include each thing here
		@name = name
		@age = age
		@funny = false		# we are defining this to be false by default
		@@people += 1		# add 1 to the number of people variable each time we add a new person
	end

	def show_age
		p "You are #{@age} years old"
	end

	def is_funny			# make this an instance method...
		#if @funny == true
		#	p "You are funny"
		# p "haha" if @funny 	# print "haha" if @funny is true
		p "not funny" unless @funny 	# could also do the opposite, print this if false
	end

	# this is a GETTER method for the class Person
	# it gets me the number of people that have been instantiated
	def self.people			# we need to define a GET and a SET on the CLASS method
		@@people			# self refers to the class inside of this class function/method/thingy
	end

end



lindsay= MyPerson.new("Lindsay", 7, true)	# if we include this on *line 7*, as a parameter
			# then we must include it here when creating an instance

lindsay.name = "raya"
p lindsay.name 

lindsay.show_age
lindsay.funny = true		# we are changing the value here to be true
lindsay.is_funny

#p lindsay

#lindsay.show_person

MyPerson.people

