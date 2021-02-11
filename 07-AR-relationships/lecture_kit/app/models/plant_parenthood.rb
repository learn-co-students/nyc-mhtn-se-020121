class PlantParenthood < ActiveRecord::Base

    belongs_to :plant_parent
    # association macro under the hood would create:
        # def plant_parent
        #     id = self.plant_parent_id
        #     PlantParent.find(id)
        # end
    belongs_to :plant

end