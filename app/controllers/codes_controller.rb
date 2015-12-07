class CodesController < ApplicationController

	before_action :find_code, only: [:show, :edit, :update, :destroy]
	before_action :authenticate_coder!, only: [:show, :edit, :update, :destroy]
	before_action :add_coder, only: [:edit, :index, :new, :show]

	def index
		# @codes = Code.all.order("created_at DESC")
		@codes = Code.where(coder_id: current_coder).order("created_at DESC")
	end

	def show
	end

	def new
		# @code = Code.new
		if coder_signed_in?
			@code = current_coder.codes.build
		else
			redirect_to new_coder_registration_path
		end
	end

	def create
		# @code = Code.new(code_params)
		@code = current_coder.codes.build(code_params)

		if @code.save
			redirect_to @code
		else
			render 'new'
		end
	end

	def edit
	end

	def update
		if @code.update(code_params)
			redirect_to @code
		else
			render 'edit'
		end
	end

	def destroy
		@code.destroy
		redirect_to codes_path
	end

	private

		def find_code
			@code = Code.find(params[:id])
		end

		def code_params
			params.require(:code).permit(:title, :content)
		end

		def add_coder
			@coder = Coder.find(current_coder)
		end
end






