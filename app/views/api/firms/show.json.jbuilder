json.partial! 'firm', firm: @firm

json.contacts do
  json.array! @firm.contacts, partial: 'api/contacts/contact', as: :contact
end

json.finances do
  json.array! @firm.finances, partial: 'api/finances/finance', as: :finance
end
