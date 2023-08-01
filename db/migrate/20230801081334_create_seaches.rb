class CreateSeaches < ActiveRecord::Migration[7.0]
  def change
    create_table :seaches do |t|

      t.timestamps
    end
  end
end
