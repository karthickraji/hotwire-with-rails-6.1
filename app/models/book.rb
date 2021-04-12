class Book < ApplicationRecord
  belongs_to :publisher, optional: true
  belongs_to :author, optional: true

  accepts_nested_attributes_for :author
  accepts_nested_attributes_for :publisher

  broadcasts_to ->(book) {'books'}, target: :books, inserts_by: :prepend
end
