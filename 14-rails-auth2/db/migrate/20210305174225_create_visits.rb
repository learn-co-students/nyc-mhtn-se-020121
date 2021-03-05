class CreateVisits < ActiveRecord::Migration[6.0]
  def change
    create_table :visits do |t|
      t.integer :length
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :place, null: false, foreign_key: true

      t.timestamps
    end
  end
end
