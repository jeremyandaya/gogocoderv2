class CssController < ApplicationController

	before_action :add_coder, only: [:lesson1]

	private

		def add_coder
			@coder = Coder.find(current_coder);
		end	
	
end
