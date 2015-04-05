class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def new
    @game = Game.new
  end

  def create
    @game = Game.new(game_params)
    @game.save
    redirect_to games_path
  end

  def show
    @game = Game.find(params[:id])
  end

  def handle
    @game = Game.find(params[:id])
  end

  def update
    @game = Game.find(params[:id])
    @game.balls.create
    redirect_to handle_game_path
  end

  private

  def game_params
    params.require(:game).permit(:name)
  end
end
