class Finance < ApplicationRecord
  validates :year, presence: true
  belongs_to :firm,
    primary_key: :id,
    foreign_key: :company_id,
    class_name: :Firm,
    dependent: :destroy
end
