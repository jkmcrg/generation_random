class CreateRandomNums < ActiveRecord::Migration
  def change
    create_table :random_nums do |t|
      t.integer :number

      t.timestamps
    end
  end
end
