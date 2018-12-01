Rails.application.routes.draw do
	root 'welcome#index'

	#a post request to server.
	get '/getPlayerList', to: 'welcome#index'
	#act as catch all and send back to index path, handle by react Route.
	match '*path', to: 'welcome#index', via: :all

end
