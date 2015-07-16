#Create a book class
class Book

	#books have a title, author, year -- these are INSTANCE variables

	# you should not be able to change the year of the book
		# you should be able to change everything else
	attr_accessor :title, :author
	attr_reader :year

	# the book CLASS should have the following variables
	@@library = []	#library (is an array of book instances)
	@@count	= 0		#count (the number of book instances)




	def initialize(title, author, year)
		@title = title 
		@author = author
		@year = year
		@@library.push(self)
		# could also write: @@library << self
		# << is called the shuffle
		@@count += 1
	end

	# there should be an instance method called describe book
		# this should return
		# "The author of <TITLE> is <AUTHOR>"
	def describe_book
		"The author of " + @title + " is " + @author
	# NOTE TO SELF: Ruby ALWAYS returns the last line of a method or whatever thingy
	# so we do NOT need to use `return` before this line
	end


	# you should have a way to print out the library and the count
		# CLASS METHODS ALWAYS START WITH self
		# these are GETTER methods
		# since this is a CLASS method, we can't use attr_reader, we have to define it
	def self.library
		@@library
	end

	def self.count
		@@count
	end

	# BONUS
		# write a class method that adds new information to the library array
	def self.moreInfo

	end


end


	


	# make an instance

p Book.count
grapesOfWrath = Book.new("Grapes Of Wrath", "John S", 1955)
# must use lower case for instances
# otherwise Ruby will think it's a class

# p grapesOfWrath
# puts grapesOfWrath.author


p grapesOfWrath.describe_book
p Book.library
p Book.count




