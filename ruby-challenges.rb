# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# pseudo code :

# create a method called letter_checker
# input: array of words, and a single letter
# expected output: an array of all the words containing that particular letter.
# process: create a method called letter_checker with the parameters 'array', and 'string'
# use the select method on the parameter array
# print the select method to check if each array in the element includes the string provides in the parameter 
# call the letter_checker method with the test variables provided included in the argument

def letter_checker(array, string)
  p array.select { |array| array.include?(string)}
end
letter_checker(beverages_array, letter_o)
letter_checker(beverages_array, letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# pseudo code:
# create a method called updated_states
# input: hash
# output: one array with all the hash values at their own index and in alphabetical order.
# process: use the methods .value to convert the hash into an array
# chain the .flatten method to the code to combine the three arrays into one array
# use the .sort method to alphabetize the combined array
# p the parameter hash with all those methods chained
# call on the updated_states method with the test variable as the parameter
def updated_states(hash)
  p hash.values.flatten.sort
end
updated_states(us_states)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# pseudo code: create a class called Bike
# input: class
# output: string returning different instance variables data using string interpolation
# process: initialize the class Bike
# set the model, wheels, and current_speed as instance variables
# set the default wheels value to 2, and the current_speed to 0
# create a method to return a string utilizing the instance variable data through string interpolation
# create a pedal_faster method
# have the updated speed be set to the current_speed + the number provided in the argument
# create a brake method
# set a conditional returning 0 if the number provided in the argument is greater or equal to 0
# all other scenarios return the current_speed subtracted by the number provided in the argument


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def status_update
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
  def pedal_faster(num)
    @current_speed = @current_speed + (num)
  end
  def brake(num)
    if num >= @current_speed
      @current_speed = 0
    else
       @current_speed = @current_speed - num
    end
  end
end

my_bike = Bike.new('Trek')
my_bike.pedal_faster(10)
my_bike.pedal_faster(18)
my_bike.brake(5)
my_bike.brake(25)
p my_bike.status_update

