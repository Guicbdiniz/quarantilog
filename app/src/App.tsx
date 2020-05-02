import React from 'react'
import { DailyUpdateForm } from './components/DailyUpdateForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className="App">
				<h1> Quarantilog </h1>
				<Switch>
					<Route path="/" component={DailyUpdateForm} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
