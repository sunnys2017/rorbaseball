class WelcomeController < ApplicationController
  def index
  end

  def getPlayerList
  	puts year = params[:year].to_i
		puts offset = (params[:offset].to_i == 1) ? 0 : 25 * params[:offset].to_i

		@players = Player.select("id, surname, given_name, avg, home_runs, rbi, runs, steals").where("avg !='NaN' and year=#{year}").order("avg desc").limit(25).offset(offset)
		render json: @players
  end
end
