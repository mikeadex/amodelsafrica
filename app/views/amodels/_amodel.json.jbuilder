json.extract! amodel, :id, :name, :gender, :age, :desc, :nationality, :city, :category, :height, :burst, :waist, :hip, :eye, :shoe, :fb, :tw, :ig, :email, :tel, :created_at, :updated_at
json.url amodel_url(amodel, format: :json)
