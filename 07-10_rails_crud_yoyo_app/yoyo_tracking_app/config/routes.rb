Rails.application.routes.draw do

#1
  root 'yoyos#index'

#2
  get '/yoyos', to: 'yoyos#index'


  # add routes for NEW and for POST

#3
  # NEW: 
  get '/yoyos/new', to: 'yoyos#new'   
  # we want to include /yoyos here, in case we have more models/routes later on that also have /new
  # remember to put '/yoyos/new' ABOVE all of the 'yoyos/:id'routes
  # this can also be written:
    # get '/yoyos/new', {:to => 'yoyos#new' }
      # where :to is a symbol (instead of to:)

#4
  # POST / CREATE:
  post '/yoyos', to: 'yoyos#create' 


#5
  # this is the SHOW route
  # it should always be AFTER the NEW route
  get 'yoyos/:id', to: 'yoyos#show', as: 'yoyo'


  # add a route for UPDATE
#6
  # need these two for the other later routes to work...
  # this is the EDIT, or create, route
  get 'yoyos/:id/edit', to: 'yoyos#edit'
      # in edit.html.erb form_for will populate a form for us if the @yoyo has data already

#7 & #8
  # my attempt -- nope!
  # get '/yoyos/:id/edit', to: 'yoyos#edit'
  # put '/yoyos', to: 'yoyos#create'

  # in-class answer:
  # this is the PUT method (2 routes)
    # `put` and `patch` essentially do the same thing, but we're writing both because
    # when we generate this later, rails will generate both
    # if I write it myself, I'll typically only need to use `patch`
  put 'yoyos/:id', to: 'yoyos#update'   # one example we'd include this line even though it does exactly the same thing is because 
        # put is only here for older APIs that use old rails lingo
  patch 'yoyos/:id', to: 'yoyos#update' # my app will use`patch`


#9
  # DELETE route
  delete 'yoyos/:id', to: 'yoyos#destroy'


  #controller#action  === the whole line adds up to the route
  #'yoyos#destroy'

end
