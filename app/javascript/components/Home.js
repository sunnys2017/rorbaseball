import React, { Component } from 'react'
import { connect } from 'react-redux'

import SortedTableComponent from './SortedTable/SortedTable'
import { fetchPlayers, fetchMorePlayers } from '../store/actions/playerActions'
import HeaderComponent from './Header'

class HomeComponent extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			loading: false,
			year: 1998,
			offset: 1
		}

		this.handleLoadMore = this.handleLoadMore.bind(this)
		this.handleChangeSelection = this.handleChangeSelection.bind(this)
		this.handleFetchPlayers = this.handleFetchPlayers.bind(this)
	}

	componentWillMount() {
		this.handleFetchPlayers(this.state.year,this.state.offset)
	}

	handleFetchPlayers = (year, offset=1) => {
		year = this.state.year
		this.setState({ loading: true })
		this.props.fetchPlayers(year, offset)
	}

	handleLoadMore = (event) => {
		this.setState({ offset: (this.state.offset + 1)})
		this.props.fetchMorePlayers(this.state.year,(this.state.offset+1))
		event.preventDefault();
	}

	handleChangeSelection = (event) => {
		this.setState({year: parseInt(event.target.value)})
	}

	render() {
		const { players } = this.props
		return(
			<div >
				<div>
					<label>
						<select value={this.state.year}
							onChange={this.handleChangeSelection}>
							<option value="1998">1998</option>
							<option value="1999">1999</option>
							<option value="2000">2000</option>
						</select>
					</label>
					<input 
						type="button" 
						value="Search" 
						className = "btn btn-primary"
						onClick={this.handleFetchPlayers}
					/>
					<input 
						type="button" 
						value="Load More"
						className = "btn btn-primary right"
						onClick={this.handleLoadMore} 
					/>
				</div>
				<SortedTableComponent players={players}/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	players: state.players
})

export default connect(mapStateToProps, { fetchPlayers, fetchMorePlayers })(HomeComponent)