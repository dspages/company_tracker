class Contact < ApplicationRecord
  validates :name, presence: true
  belongs_to :firm,
    primary_key: :id,
    foreign_key: :company_id,
    class_name: :Firm
end
