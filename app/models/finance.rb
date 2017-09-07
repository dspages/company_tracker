class Finance < ApplicationRecord
  validates :year, presence: true
  validates :year, uniqueness: {scope: :company_id}
  belongs_to :firm,
    primary_key: :id,
    foreign_key: :company_id,
    class_name: :Firm,
    dependent: :destroy
end
