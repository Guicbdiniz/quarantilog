import React from 'react'
import { DailyUpdateForm } from './components/DailyUpdateForm'
import { DailyUpdateSearch } from './components/DailyUpdateSearch'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className="App">
				<header>
					<h1> Quarantilog </h1>
					<Link to="/">Add Daily Update</Link>
					<Link to="/search">Search for Daily Update</Link>
				</header>
				<Switch>
					<Route path="/search" component={DailyUpdateSearch} />
					<Route path="/" component={DailyUpdateForm} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
