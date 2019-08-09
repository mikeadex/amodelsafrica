class AddAvatarToAmodels < ActiveRecord::Migration[5.2]
  def change
    add_column :amodels, :avatar, :string
  end
end
