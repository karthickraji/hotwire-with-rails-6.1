class CreatePublisher < ActiveRecord::Migration[6.1]
  def change
    create_table :publishers do |t|
      t.string :name
      t.integer :contact_number

      t.timestamps
    end
  end
end
