######## ORM practice example

require 'pry'
require 'pg'

HOSTNAME = :localhost
DATABASE = :testdb


class Movie

    attr_accessor :id, :title, :description, :rating

    #@@results = []

    def self.create_movies_table
        c = PGconn.new(:host => HOSTNAME, :dbname => DATABASE)
        c.exec %q{
        CREATE TABLE movies (
            id SERIAL PRIMARY KEY,
            title TEXT,
            description TEXT,
            rating INTEGER
            );
        }
        #@@results << self
        c.close
    end

    def self.create(args)
        movie = Movie.new(args)
        movie.save
    end

    # make this as a class method
    def self.all
        # TODO: get all 
        c = PGconn.new(:host => HOSTNAME, :dbname => DATABASE)
        results = []

        res = c.exec "SELECT * FROM movies"

        # get these properties contained in each row
        res.each do |movie|
            id = movie['id']
            title = movie['title']
            description = movie['description']
            rating = movie['rating']

            results.push Movie.new({:id => id, :title => title, :description => description, :rating => rating})
            # could also use a shovel here
            # results << Movie.new({:id ....
        end

        c.close

        results # need to include results here as the last line, so ruby returns results
                # otherwise it would return the one object we just did do each on and exit
    end

    def initialize(args)
        connect

        if args.has_key? :id
            @id = args[:id]
        end

        if args.has_key? :title
            @title = args[:title]
        end

        if args.has_key? :description
            @description = args[:description]
        end

        if args.has_key? :rating
            @rating = args[:rating]
        end
    end

    def save
        sql = "INSERT INTO movies (title, description, rating"
        args = [title, description, rating]

        if id.nil?
            sql += ") VALUES ($1, $2, $3)"
        else
            sql += ", id) VALUES ($1, $2, $3, $4)"
            args.push id
        end

        # need this `RETURNING *` in order for us to access the data in line 71, id = res[0]['id']
        sql += ' RETURNING *;'

        res = @c.exec_params(sql, args)
        @id = res[0]['id']
        self
    end

    def delete
        # Write a method to delete the data from the database.  
        
        # c = PGconn.new(:host => HOSTNAME, :dbname => DATABASE)
        # this line gets replaced by @c from the connect method below
        sql = "DELETE FROM movies WHERE id=$1"
        @c.exec_params(sql, [id])
        self

        # we're closing the connecting at the end of this file, otherwise, we would want 
        # to close the connection inside of this method. We're also leaving it open
        #@c.close
    end

    def close
        @c.close
    end

    def to_s
      "#{@id}: #{m.title} - #{m.description} - #{m.rating}"
    end

    # Q: What is private?
    # http://devblog.orgsync.com/2013/05/20/private-and-protected-they-might-not-mean-what-you-think-they-mean/  
    private
        def connect
            @c = PGconn.new(:host => HOSTNAME, :dbname => DATABASE)
        end

end

# the params here are in a different order than when we create new instances, however,
# it's ok because ruby is looking for the id, the :rating, for example, to find the value and
# we assign them / match them up in our initialize method above (lines 36 thru 54)
m = Movie.new({:rating => 6, :title => "Frozen", :description => "A snowman named Olaf is comic relief"})
m.save
puts m.id
binding.pry     # binding.pry lets us see where we are, which part of our code is being run, in terminal, 
# when this file gets to this point in the program
puts m.all
puts m
# m.delete
m.close


