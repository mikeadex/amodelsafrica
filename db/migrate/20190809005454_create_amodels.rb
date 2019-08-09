class CreateAmodels < ActiveRecord::Migration[5.2]
  def change
    create_table :amodels do |t|
      t.string :name
      t.string :gender
      t.string :age
      t.text :desc
      t.string :nationality
      t.string :city
      t.string :category
      t.string :height
      t.string :burst
      t.string :waist
      t.string :hip
      t.string :eye
      t.string :shoe
      t.string :fb
      t.string :tw
      t.string :ig
      t.string :email
      t.string :tel

      t.timestamps
    end
  end
end
