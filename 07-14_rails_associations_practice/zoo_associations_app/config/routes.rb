Rails.application.routes.draw do
  # get 'animals/zoos'

  # get 'animals/index'

  # get 'animals/new'

  # get 'animals/show'

  # get 'animals/edit'

  # get 'zoos/index'

  # get 'zoos/new'

  # get 'zoos/show'

  # get 'zoos/edit'


    root 'zoos#index'

    resources :zoos do
        resources :animals
    end

#          Prefix   Verb   URI Pattern                              Controller#Action

#            root   GET    /                                        zoos#index

#            zoos   GET    /zoos(.:format)                          zoos#index
#                   POST   /zoos(.:format)                          zoos#create
#         new_zoo   GET    /zoos/new(.:format)                      zoos#new
#        edit_zoo   GET    /zoos/:id/edit(.:format)                 zoos#edit
#             zoo   GET    /zoos/:id(.:format)                      zoos#show
#                   PATCH  /zoos/:id(.:format)                      zoos#update
#                   PUT    /zoos/:id(.:format)                      zoos#update
#                   DELETE /zoos/:id(.:format)                      zoos#destroy

#     zoo_animals   GET    /zoos/:zoo_id/animals(.:format)          animals#index
#                   POST   /zoos/:zoo_id/animals(.:format)          animals#create
#  new_zoo_animal   GET    /zoos/:zoo_id/animals/new(.:format)      animals#new
# edit_zoo_animal   GET    /zoos/:zoo_id/animals/:id/edit(.:format) animals#edit
#      zoo_animal   GET    /zoos/:zoo_id/animals/:id(.:format)      animals#show
#                   PATCH  /zoos/:zoo_id/animals/:id(.:format)      animals#update
#                   PUT    /zoos/:zoo_id/animals/:id(.:format)      animals#update
#                   DELETE /zoos/:zoo_id/animals/:id(.:format)      animals#destroy



end
