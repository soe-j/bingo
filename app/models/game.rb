class Game < ActiveRecord::Base
  has_many :appeared_balls, class_name: 'bingo_balls'
end
