require 'nokogiri'
require 'open-uri'

doc = Nokogiri::XML(open('http://www.cafeconleche.org/examples/baseball/1998statistics.xml'))


#p = Player.new
doc.xpath("//SEASON").each do |season_element|
	#t = Team.new
	puts season_element.xpath('YEAR').text
	season_element.xpath('LEAGUE').each do |league_element|
		puts 'leage name is: ' + league_element.xpath('LEAGUE_NAME').text
		league_element.xpath('DIVISION').each do |division_element|
			puts 'division name is: ' + division_element.xpath('DIVISION_NAME').text
			division_element.xpath('TEAM').each do |team_element|
				puts 'team city is: ' + team_element.xpath('TEAM_CITY').text
				puts 'team name is: ' + team_element.xpath('TEAM_NAME').text
				team_element.xpath('PLAYER').each do |player_element|
					puts 'play name is: ' + player_element.xpath('SURNAME').text
				end
			end
		end
	end
end
	
