class CreatePlaces < ActiveRecord::Migration[6.0]
  def change
    create_table :places do |t|
      t.string :name
      t.string :description
      t.string :street_address
      t.integer :zip

      t.timestamps
    end
  end
end
