class AddCoderIdToCodes < ActiveRecord::Migration
  def change
    add_column :codes, :coder_id, :integer
  end
end
