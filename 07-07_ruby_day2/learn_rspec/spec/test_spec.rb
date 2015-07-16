require "spec_helper"



describe "Testing" do

# hooks - before saving, do something
# hooks, variables, etc, that I want to use in each test
# should be declared here, inside of the describe block

	it "is really great at testing addition" do
		expect(2+2).to eq(4)
	end
	it "is also great at testing truthyness" do
		expect(2).to be_truthy
		expect("").to be_truthy		# in JavaScript an empty string is falsy, but in Ruby, it is truthy
		expect(0).to be_truthy
	end
	it "is also great at testing falsyness" do
		expect(false).to be_falsey	# there are only TWO falsey values in Ruby, these are them!
		expect(nil).to be_falsey	# everything else is truthy
	end
end