class WelcomeController < ApplicationController

	def index
	end

	def welcome
		if coder_signed_in?
			@coder = Coder.find(current_coder)
		else
			redirect_to new_coder_session_path
		end
	end

end
