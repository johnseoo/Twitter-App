import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
	super()
	this.state = {
		users: "Elon Musk",
		Tweet: "Tesla is the best!"
	}
	}
	render(){
	return (
	<div>
		<label className="label">
		</label>
		<input id="name" type="text" placeholder= "Text to Search"/>
		<button> Submit </button>
		<p>
			Users: {this.state.users}
			</p>
			<p>
			Tweet: {this.state.Tweet}
			</p>
	</div>
	)
}
}

ReactDOM.render(<App />, document.querySelector('#root'));
