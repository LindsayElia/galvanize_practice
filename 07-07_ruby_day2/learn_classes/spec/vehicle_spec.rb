require "spec_helper"
require_relative "../vehicle_class"		# must use require_relative
# to bring in any external file
# that lives in a relative path
# for anything that lives outside of the spec folder

describe Vehicle do

	# create a new vehicle
	let(:vehicle){Vehicle.new("toyota", "corolla", 2004)}

	# check variables on class instances
	describe "instance variables" do
		it "has a make of toyota" do
			expect(vehicle.make).to eq("toyota")
		end
	end

	# check methods on class
	describe "#honk" do
		it "returns quack!" do
			expect(vehicle.honk).to eq("quack!")
		end
	end

	describe "#add year to model" do
		it "should add one year to the vehicle instance" do
			expect(vehicle.add_one_year_to_model).to eq(2005)
		end
	end

end

