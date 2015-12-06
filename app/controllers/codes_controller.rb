class CodesController < ApplicationController
	before_action :find_code, only: [:show, :edit, :update, :destroy]
	def index
		@codes = Code.all.order("created_at DESC")
	end

	def show
	end

	def new
		@code = current_coder.codes.build
	end

	def create
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
end
