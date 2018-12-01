import React from 'react'
import ReactDOM from 'react-dom'
//import PropTypes from 'prop-types'
import App from '../containers/App'
import { BrowserRouter as Router, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
  	<Router>
    	<Route path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
