class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string :species
      t.integer :height
      t.string :color
      t.datetime :bought
    end
  end
end
