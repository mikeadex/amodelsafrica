json.extract! blog, :id, :title, :shortdesc, :desc, :created_at, :updated_at
json.url blog_url(blog, format: :json)
