class Person   # when making a class, the class name must be UPPER case

	# sometimes we need to make GET and SET methods for the class
	# easier way is to use attr_writer, attr_reader, or attr_accessor

	# attr_accessor : name
	# replaces both the GET and the SET, or the attr_reader & the attr_writer
	# unless want to allow the user the read but not write, for example, then would use attr_reader
	def initialize(name)		# method is called initialized
		@name = name	# here is where we pass in the properties for this class, for each instance we'll be making
						# @name is the `instance variable`
	end

	# write a method that GETS me the name
	# attr_reader replaces this
	def name
		@name
	end

	# write a method that SETS the name to something else
	# attr_writer replaces this
	def name= (other_name)	# the `=` must be just after `name` with no spaces
		@name = other_name
	end

end


# initialize is implicitly called when we use `new`

elie= Person.new("Elie")	# here we could put a space between `elie` and `=` for readability, but it means the same thing

elie.name = "bob"
p elie.name 		# `p` might mean the same thing as `puts` ?
					# seems to output similar to puts, except without qoutation marks around the string


# this is verison one ^^^^




# this is version two below

# class Person

# 	attr_accessor: name, :age
# 	def initialize(name, age)
# 		@name = name
# 		@age = age
# 	end

# end