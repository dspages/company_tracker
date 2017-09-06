class CreateFinances < ActiveRecord::Migration[5.0]
  def change
    create_table :finances do |t|
      t.integer :company_id
      t.integer :year
      t.integer :liabilities
      t.integer :valuation
      t.integer :assets
      t.integer :gross_income
      t.integer :expenses
      t.timestamps
    end
    add_index :finances, :company_id
  end
end
