class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception 	# we commented this line out temporarily while we
  # were learning how to post requests, before we learned how to use ??? form data
end
