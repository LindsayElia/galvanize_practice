require "spec_helper"

describe "testing all the iterator methods" do

	# select
	it "uses 'select' to select all even numbers from an array" do 
		expect([1,2,3,4,5,6].select{|item| item.even?}).to eq([2,4,6])
	end
	it "uses 'select' to select all odd numbers from an array" do 
		expect([1,2,3,4,5,6].select{|item| item.odd?}).to eq([1,3,5])
	end
	it "uses 'select' to select all strings from an array with 7 letters" do 
		expect(["tony", "madoka", "lindsay"].select{|name| name.length == 7}).to eq(["lindsay"])
	end
	it "uses 'select' to select all numbers from an array that are fixed number types" do
		expect([1,2,7.3,8.5].select{|item| item.class == Fixnum}).to eq([1,2])
	end

	# reject
	it "uses 'reject' to select all numbers from an array that are NOT even" do 
		expect([1,2,3,4,5,6].reject{|item| item.even?}).to eq([1,3,5])
	end
	it "uses 'reject' to select all numbers from an array that are NOT odd" do 
		expect([1,2,3,4,5,6].reject{|item| item.odd?}).to eq([2,4,6])
	end
	it "uses 'reject' to select all strings from an array that do NOT have 7 letters" do 
		expect(["tony", "madoka", "lindsay"].reject{|name| name.length == 7}).to eq(["tony", "madoka"])
	end
	it "uses 'reject' to select all numbers from an array that are NOT fixed number types" do
		expect([1,2,7.3,8.5].reject{|item| item.class == Fixnum}).to eq([7.3,8.5])
	end

	# collect / map
	it "uses 'collect' to add '!!' to the end of each string" do
		expect(["tony", "madoka", "lindsay"].collect{|name| name + "!!"}).to eq(["tony!!", "madoka!!", "lindsay!!"])
	end
	it "uses 'collect.with_index' to add multiple each string item by its index position" do
		expect(["tony", "madoka", "lindsay"].collect.with_index{ |name, index| name * index }).to eq(["", "madoka", "lindsaylindsay"])
	end
	it "uses 'collect.with_index' to add '*' to the end of each string item, the number of times as the index position for each string" do
		expect(["tony", "madoka", "lindsay"].collect.with_index{ |name, index| name + ("*" * index) }).to eq(["tony", "madoka*", "lindsay**"])
	end

	# detect / find

	# inject

	# partition

	# sort

	# one

	# none

end