class CreateFirms < ActiveRecord::Migration[5.0]
  def change
    create_table :firms do |t|
      t.string :status, null: false
      t.text :info
      t.string :name, null: false
      t.timestamps
    end
    add_index :firms, :status
    add_index :firms, :name
  end
end
