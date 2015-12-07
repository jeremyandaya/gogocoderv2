class AddNameToCoders < ActiveRecord::Migration
  def change
  	add_column :coders, :first_name, :string
  	add_column :coders, :last_name, :string
  end
end
