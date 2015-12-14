class Code < ActiveRecord::Base
	belongs_to :coder
	belongs_to :category
	validates_presence_of :content
	validates_presence_of :title
	validates_presence_of :category_id
end
