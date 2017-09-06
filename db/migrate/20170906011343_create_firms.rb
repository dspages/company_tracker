class CreateFirms < ActiveRecord::Migration[5.0]
  def change
    create_table :firms do |t|
      t.string :status, null: false
      t.text :info
      t.integer :liabilities
      t.integer :valuation 
      t.integer :outstanding_shares
      t.integer :assets
      t.integer :gross_income
      t.integer :expenses
      t.string :name, null: false
      t.timestamps
    end
  end
end
