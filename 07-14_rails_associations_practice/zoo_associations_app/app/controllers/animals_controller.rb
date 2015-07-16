class AnimalsController < ApplicationController

    def zoos
    end

    def index
        @zoo = Zoo.find(params[:zoo_id])
        # @animals = @zoo.animals
    end

    # when we save the animal, we give it the id of the zoo
    # so that animal is now associated with that zoo
    # animal form will show [@zoos, @animal] in the form_for...singular or plural
    def new
        # @zoo = Zoo.find(params[:zoo_id])
        find_zoo
        @animal = Animal.new
    end

    def create
        find_zoo
        # where @zoo is the animal we found from the url
        # pass in the @zoo so it knows which zoo to render
        @animal = @zoo.animals.new( animal_params )
        # @animal = @zoo.animals.create( animal_params )  # create will also work, but new & save is better for error handling
        if(@animal.save)
            redirect_to zoo_animals_path(@zoo)
        else
            render :new
        end
        
    end

    def show
        # find animal by its id
    end

    def edit

    end

    def update
        #@animal.update animal_params
        #if @animal.save
            # redirect_to zoo_animals_path(zoo)
        # else
            # 
        # end
    end

    def destroy
        #
    end


    private
        def find_animal
            @animal = Animal.find(params[:id])
        end

        def find_zoo
            @zoo = Zoo.find(params[:zoo_id])
            # our routes use :zoo_id, not :id, for the zoo id.
            # our routes use :id for the animal id
        end

        def animal_params
            params.require(:animal).permit(
                :name,
                :species,
                )
        end

end
