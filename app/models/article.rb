class Article < ApplicationRecord
  # has_one_attached :photo
  has_many :likes
  has_many :comments
end
