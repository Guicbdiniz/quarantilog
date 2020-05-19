import React from 'react'
import { DailyUpdateForm } from './components/DailyUpdateForm'
import { DailyUpdateSearch } from './components/DailyUpdateSearch'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './style/App.css'

/**
 * App's main React Component.
 * It contains, basically, a header with the App info and a navigation menu to switch between services.
 */
function App() {
	return (
		<Router>
			<div className="App">
				<header>
					<h1 className="title"> Quarantilog </h1>
					<div className="nav">
						<Link to="/" className="link">
							Add Daily Update
						</Link>
						|
						<Link to="/search" className="link">
							Search for Daily Update
						</Link>
					</div>
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
