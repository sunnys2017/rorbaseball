Rails.application.routes.draw do
	root 'welcome#index'

	#a get request to server.
	get '/getPlayerList/:year/:offset', to: 'welcome#getPlayerList'
	#act as catch all and send back to index path, handle by react Route.
	match '*path', to: 'welcome#index', via: :all

end
