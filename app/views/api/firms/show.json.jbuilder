json.set! firm.id do
  json.partial! 'firm', firm: firm
end

json.contacts do
  json.array! @firm.contacts, partial: 'api/contacts/contact', as: :contact
end
