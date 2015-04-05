class BingoBall < ActiveRecord::Base
  belongs_to :owned_game, class_name: 'Game'
  validates :number, uniqueness: true, presence: true

  before_validation do |ball|
    # appeared_numbers = ball.owned_game.appeared_numbers
    appeared_numbers = Game.find(ball.game_id).appeared_numbers
    ball.number = ([*1..75] - appeared_numbers).sample
  end


end
