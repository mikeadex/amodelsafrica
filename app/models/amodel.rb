class Amodel < ApplicationRecord
  mount_uploader :avatar, AvatarUploader
  mount_uploaders :portfolios, PorftolioUploader

end
