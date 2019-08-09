class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :category
      t.text :description
      t.string :pin
      t.string :linkedin
      t.string :ig
      t.string :fb
      t.string :tw
      t.string :youtube

      t.timestamps
    end
  end
end
