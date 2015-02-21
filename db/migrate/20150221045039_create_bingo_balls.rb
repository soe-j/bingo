class CreateBingoBalls < ActiveRecord::Migration
  def change
    create_table :bingo_balls do |t|
      t.integer :number
      t.integer :game_id

      t.timestamps null: false
    end
  end
end
