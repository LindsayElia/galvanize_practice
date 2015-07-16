######## Database access in Ruby using PG, example

require 'pry'
require 'pg'

def connect
  PGconn.new(:host => "localhost", :dbname => "testdb")
end

# Print all movies
def print_movies
  c = connect
  movies = c.exec_params("SELECT * FROM movies;")
  # look up line 14 here...what does each thing do?
  movies.each do |movie|
    puts "#{movie['title']} - #{movie['description']} - #{movie['rating']}" 
  end
  c.close
end


# A mehtod that can create the table for us 
def create_movies_table
  c = connect
  # this is another way to write a string, using %q{}
  c.exec %q{              
  CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    rating INTEGER
  );
  }
  c.close
end

# A method that will get rid of the table
# this is useful if setting up for testing, erases any tables that would match the table name
# for the one we're creating in this file
def drop_movies_table
  c = connect
  c.exec "DROP TABLE IF EXISTS movies;" 
  c.close
end


def create_movie(title, description, rating) 
  # Fill in this method so that a new movie is created in the database.  Make sure
  # to use exec_params instead of exec.
  # use an insert statement, use exec_params (this method takes in info / has info coming in, we don't know where from)
  # we need to include (title, description, rating) after INSERT... because we're not specifying the id for this item
  # ruby does NOT like a space between exec_params and the () around the SQL command
  # however, it will run without any () around the SQL command whatsoever
  c = connect
  c.exec_params "INSERT INTO movies (title, description, rating) VALUES ($1, $2, $3);", [title, description, rating]
  c.close
end


drop_movies_table
create_movies_table
create_movie("Back to the future", "A time travel movie", 9)
print_movies