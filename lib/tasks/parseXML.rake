namespace :parse do
	desc "parse xml, store data into db"
	task :xml => :environment do
		doc = Nokogiri::XML(open('http://www.cafeconleche.org/examples/baseball/1998statistics.xml')) do |config|
			config.options = Nokogiri::XML::ParseOptions::NOERROR
		end

		doc.xpath("//SEASON").each do |season_element|
			puts season_element.xpath('YEAR').text
			season_element.xpath('LEAGUE').each do |league_element|
				league_element.xpath('DIVISION').each do |division_element|
					division_element.xpath('TEAM').each do |team_element|
						team = Team.create(
							:year => season_element.xpath('YEAR').text.to_i,
							:league_name => league_element.xpath('LEAGUE_NAME').text,
							:division_name => division_element.xpath('DIVISION_NAME').text,
							:team_city => team_element.xpath('TEAM_CITY').text,
							:team_name => team_element.xpath('TEAM_NAME').text,
							:created_at => Time.new,
							:updated_at => Time.new,
							:team_id => SecureRandom.uuid
						)

						team_element.xpath('PLAYER').each do |player_element|
							
							arr = Player.column_names
							p = Player.new
							arr.each do |a|
								b = a.upcase
								case a
								when 'player_id'
									p[a] = SecureRandom.uuid
								when 'team_id'
									p[a] = team.team_id
								when 'created_at','updated_at'
									p[a] = Time.new
								when 'avg'
									p[a] = getAvg(player_element)
								when 'id'
								when 'team_city', 'team_name'
									p[a] = team_element.xpath(b).text
								when 'division_name'
									p[a] = division_element.xpath(b).text
								when 'league_name'
									p[a] = league_element.xpath(b).text
								when 'year'
									p[a] = season_element.xpath(b).text.to_i
								else 
									if Player.columns_hash[a].type == :integer 
										p[a] = player_element.xpath(b).text.to_i 
									else
										p[a] = player_element.xpath(b).text
									end
								end
							end
							p.save

						end
					end
				end
			end
		end

	end

	task :updateMigrate => :environment do
		doc = Nokogiri::XML(open('http://www.cafeconleche.org/examples/baseball/1998statistics.xml')) do |config|
			config.options = Nokogiri::XML::ParseOptions::NOERROR
		end
		set = Set.new
		doc.xpath("//*[not(*)]").each do |element|
			set << "#{element.name}".downcase
		end
		puts set

	  puts checkAttributes(set)
=begin TBD: automatically add new column for new lists.
		#ActiveRecord::Migration.add_column :players, :whatever, :string
		checkAttributes(set).each do |column|
			puts column
			#`rails generate migration AddColumnsToPlayers #{column}:string`
		end
	  #sleep 2
	  #`rake db:migrate`
=end
	end

	def getAvg(player_element)
		at_bats = player_element.xpath('AT_BATS').text
		hits = (player_element.xpath('HITS').text != nil) ? player_element.xpath('HITS').text : 0
		return avg = (at_bats!=nil && at_bats !=0) ? ('%.2f' % (hits.to_f/at_bats.to_f)) : 0
	end

	def getOps(player_element)
		#TBD
	end

	def checkAttributes(set)
		result = []
		arr = Player.column_names
		if arr.length() != set.size()
			set.each do |s|
				if !arr.include? s
					result.push(s)
				end
			end	
		end
	  return result
	end


end