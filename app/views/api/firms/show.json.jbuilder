json.partial! 'firm', firm: @firm

json.contacts do
  json.array! @firm.contacts, partial: 'api/contacts/contact', as: :contact
end
