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
		<ul>
			<li>
			Users: {this.state.users}
			</li>
			<li>
			Tweet: {this.state.Tweet}
			</li>
		</ul>
	</div>
	)
}
}

ReactDOM.render(<App />, document.querySelector('#root'));
