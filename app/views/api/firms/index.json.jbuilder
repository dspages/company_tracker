@firms.each do |firm|
  json.set! firm.id do
    json.partial! 'firm', firm: firm
  end
end
