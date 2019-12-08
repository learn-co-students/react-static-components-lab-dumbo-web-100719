import React, { Component } from 'react';
import MouseComponent from './MouseComponent'
import CatComponent from './CatComponent'
import {EinsteinQuoteComponent} from './EinsteinQuoteComponent'
class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
