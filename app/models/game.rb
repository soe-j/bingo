class Game < ActiveRecord::Base
  has_many :balls, class_name: 'BingoBall'

  def appeared_numbers
    balls.pluck(:number)
  end
end
