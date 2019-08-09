class AddPortfoliosToAmodels < ActiveRecord::Migration[5.2]
  def change
    add_column :amodels, :portfolios, :json
  end
end
