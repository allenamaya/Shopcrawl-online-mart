class CreateDeals < ActiveRecord::Migration[7.0]
  def change
    create_table :deals do |t|
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
