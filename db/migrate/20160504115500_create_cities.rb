class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.string :current_temp
      t.string :tomorrow_temp
      t.timestamps null: false
    end
  end
end
