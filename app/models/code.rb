class Code < ActiveRecord::Base
	belongs_to :coder
	belongs_to :category
end
