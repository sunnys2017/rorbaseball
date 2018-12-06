import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import _ from 'lodash'

import COLUMNS from './playerFields'
import PLAYERTESTDATA from './playerTestData'


class SortedTableComponent extends Component {

	getData() {
		const { players } = this.props.players

		return (players && players.length!==0) ? players : [] //PLAYERTESTDATA
	}

	renderColumn() {
		return _.map(COLUMNS, ({ column, isKey, name }) => {
			return <TableHeaderColumn key='id' dataField={column} isKey={isKey} dataSort>{name}</TableHeaderColumn>
		})
	}
	

	render() {
		const options = {
      defaultSortName: 'avg', 
			defaultSortOrder: 'desc',
			sizePerPageList: [ {
        text: '25', value: 25
      }, {
        text: '50', value: 50
      }, {
        text: 'All', value: this.getData().length
      } ],
      sizePerPage: 25,
      //paginationPosition: 'top'
    };

		return (
			<div>
				<BootstrapTable 
					data={ this.getData() } 
					options={ options }
					pagination= { true }
				>
					{this.renderColumn()}
        </BootstrapTable>
			</div>
		)
	}
}

export default SortedTableComponent