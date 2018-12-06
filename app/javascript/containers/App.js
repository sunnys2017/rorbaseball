import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from '../store'
import HomeComponent from '../components/Home'
import PageNotFoundComponent from '../components/PageNotFound'
import HeaderComponent from '../components/Header'
import FooterComponent from '../components/Footer'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="container">
					<HeaderComponent />
					<Switch>
						<Route exact path="/" component={HomeComponent} />
						<Route  component={PageNotFoundComponent} />
					</Switch>
					<FooterComponent />
				</div>
			</Provider>
		)
	}
}

export default App