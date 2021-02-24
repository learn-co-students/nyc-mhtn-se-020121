class CreateSushis < ActiveRecord::Migration[6.0]
  def change
    create_table :sushis do |t|
      t.string :name
      t.string :color
      t.float :price

      t.timestamps
    end
  end
end
