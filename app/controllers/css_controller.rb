class CssController < ApplicationController

	before_action :add_coder, only: [:lesson1]

	private

		def add_coder
			if coder_signed_in?
				@coder = Coder.find(current_coder)
			else
				redirect_to new_coder_session_path
			end
		end	
	
end
