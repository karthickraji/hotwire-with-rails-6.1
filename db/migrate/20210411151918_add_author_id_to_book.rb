class AddAuthorIdToBook < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :isbn, :integer
    add_column :books, :total_pages, :integer
    add_column :books, :published_date, :datetime
    add_reference :books, :publisher, foreign_key: true
    add_reference :books, :author, foreign_key: true
  end
end
