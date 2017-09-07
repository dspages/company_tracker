@firms.each do |firm|
  json.set! firm.id do
    json.extract! firm, :status, :info, :name, :id
  end
end
