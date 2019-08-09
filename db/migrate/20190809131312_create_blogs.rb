class CreateBlogs < ActiveRecord::Migration[5.2]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :shortdesc
      t.text :desc

      t.timestamps
    end
  end
end
