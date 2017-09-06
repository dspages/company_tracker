@firms.each do |firm|
  json.set! firm.id do
    json.extract! firm, :status, :info, :liabilities,
    :valuation, :outstanding_shares, :assets, :gross_income,
    :expenses, :name, :id
  end
end
