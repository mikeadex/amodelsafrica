class AddBlogprofileToBlog < ActiveRecord::Migration[5.2]
  def change
    add_column :blogs, :blogprofile, :string
  end
end
