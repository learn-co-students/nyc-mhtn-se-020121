class Plant < ActiveRecord::Base

    belongs_to :category
    has_many :plant_parenthoods

    # has_many :parents, through: :plant_parenthoods
    # ^this is because we don't have a parents table
    # ActiveRecord::HasManyThroughSourceAssociationNotFoundError: Could not find the source association(s) "parent" or :parents in model PlantParenthood.

    has_many :plant_parents, through: :plant_parenthoods

    def some_behavior
        binding.pry
    end

end
