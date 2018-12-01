import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

import _ from 'lodash'

import COLUMNS from './playerFields'

//for testing only
const playersTest = [{
	id:1,
	surname:'Allen',
	given_name: 'Miao',
	AVG: 1,
	home_run: 1,
	RBI: 2,
	RUNS: 3,
	SB: 4,
	OPS: 5
},{
	id:2,
	surname:'Meng',
	given_name: 'Yao',
	AVG: 2,
	home_run: 2,
	RBI: 3,
	RUNS: 4,
	SB: 5,
	OPS: 6
}]

class SortedTableComponent extends Component {
	constructor(props) {
		super(props)
		this.options = {
			defaultSortName: 'AVG', 
			defaultSortOrder: 'desc'
		}
		console.log(this.props.players)
	}

	renderColumn() {
		return _.map(COLUMNS, ({ column, isKey, name }) => {
			return <TableHeaderColumn key='id' dataField={column} isKey={isKey} dataSort>{name}</TableHeaderColumn>
		})
	}
	render() {
		return (
			<div>
				<BootstrapTable data={ playersTest || this.props.players } options={ this.options }>
					{this.renderColumn()}
        </BootstrapTable>
			</div>
		)
	}
}

export default SortedTableComponent