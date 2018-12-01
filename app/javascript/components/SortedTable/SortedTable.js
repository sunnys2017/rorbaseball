import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import _ from 'lodash'

import COLUMNS from './playerFields'
import PLAYERTESTDATA from './playerTestData'


class SortedTableComponent extends Component {
	constructor(props) {
		super(props)
		this.options = {
			page: 2,  // which page you want to show as default
      sizePerPageList: [ {
        text: '5', value: 5
      }, {
        text: '10', value: 10
      }, {
        text: 'All', value: this.getData().length
      } ], // you can change the dropdown list for size per page
      sizePerPage: 5,  // which size per page you want to locate as default
      pageStartIndex: 0, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
      //paginationPosition: 'top',  // default is bottom, top and both is all available
      // hideSizePerPage: true, > You can hide the dropdown for sizePerPage
      //alwaysShowAllBtns: true // Always show next and previous button
      // withFirstAndLast: false > Hide the going to First and Last page button
		}
		this.sortOptions = {
			defaultSortName: 'AVG', 
			defaultSortOrder: 'desc',
		}
	}

	renderShowsTotal(start, to, total) {
    return (
      <p style={ { color: 'blue' } }>
        From { start } to { to }, totals is { total }&nbsp;&nbsp;(its a customize text)
      </p>
    );
  }


	getData() {
		const { players } = this.props.players
		return (players && players.length!==0) ? players : PLAYERTESTDATA
	}

	renderColumn() {
		return _.map(COLUMNS, ({ column, isKey, name }) => {
			return <TableHeaderColumn key='id' dataField={column} isKey={isKey} dataSort>{name}</TableHeaderColumn>
		})
	}
	render() {
		return (
			<div>
				<BootstrapTable 
					data={ this.getData() } 
					options={ this.sortOptions }
					pagination={ true }>
					{this.renderColumn()}
        </BootstrapTable>
			</div>
		)
	}
}

export default SortedTableComponent