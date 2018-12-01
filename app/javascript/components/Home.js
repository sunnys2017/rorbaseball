import React, { Component } from 'react'
import { connect } from 'react-redux'

import SortedTableComponent from './SortedTable'
import { fetchPlayers } from '../store/actions/playerActions'

class HomeComponent extends Component {
	state = {
		loading: false,
		year: 1998
	}

	componentWillMount() {
		const { year } = this.state.year;//this.props

		this.handleFetchPlayers(year)
	}

	handleFetchPlayers = (year) => {
		this.setState({ loading: true })
		this.props.fetchPlayers(year)
	}
	render() {
		const { players } = this.props
		console.log('****')
		console.log( players )
		console.log('****')

		return(
			<div className="container">
				<div className="col-md-8 offset-md-2">
					<h2>Home Page</h2>
					<SortedTableComponent />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	players: state.players
})

export default connect(mapStateToProps, { fetchPlayers })(HomeComponent)