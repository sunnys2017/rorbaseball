import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from '../store'
import HomeComponent from '../components/Home'
import PageNotFoundComponent from '../components/PageNotFound'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Switch>
						<Route exact path="/" component={HomeComponent} />
						<Route  component={PageNotFoundComponent} />
					</Switch>
				</div>
			</Provider>
		)
	}
}

export default App