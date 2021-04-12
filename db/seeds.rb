# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

30.times do  
  book = Book.new
  book.title = Faker::Book.title
  book.isbn = Faker::Number.number
  book.total_pages = Faker::Number.number(digits: 3)
  book.published_date = Faker::Date.in_date_period
  author = book.build_author
  author.name = Faker::Book.author
  author.contact_number = Faker::PhoneNumber.cell_phone
  publisher = book.build_publisher
  publisher.name = Faker::Book.publisher
  publisher.contact_number = Faker::PhoneNumber.cell_phone
  book.save
end
