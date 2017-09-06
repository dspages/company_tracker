class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :name, null: false
      t.string :email
      t.integer :company_id
      t.string :notes
      t.timestamps
    end
    add_index :contacts, :company_id
  end
end
