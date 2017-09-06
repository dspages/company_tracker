class Firm < ApplicationRecord
  validates :name, presence: true
  has_many :contacts,
    primary_key: :id,
    foreign_key: :company_id,
    class_name: :Contact
  has_many :finances,
    primary_key: :id,
    foreign_key: :company_id,
    class_name: :Finance
end
