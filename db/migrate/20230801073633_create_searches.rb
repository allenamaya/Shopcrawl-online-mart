class CreateSearches < ActiveRecord::Migration[7.0]
  def change
    create_table :searches do |t|
      t.string :searches
      t.references :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
