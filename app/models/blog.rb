class Blog < ApplicationRecord
  mount_uploader :blogprofile, BlogprofileUploader
end
