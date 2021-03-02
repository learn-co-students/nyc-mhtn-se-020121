class CreateSweets < ActiveRecord::Migration[5.1]
  def change
    create_table :sweets do |t|
      t.string :name
      t.timestamps
    end
  end
end
