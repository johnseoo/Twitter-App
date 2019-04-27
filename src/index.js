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

		const outerDiv = {
			display: "block",
 			marginLeft: "auto",
  			marginRight: "auto",
  			marginTop: "200px",
  			width: "50%",
  			
		}

		const innerDiv = {

			border: "solid 1px black",
			width: "400px",
			height:"200px",
			marginTop: "30px",
			fontSize: "large"
		}

		const searchDiv = {
			border: "solid 1px black",
			width: "280px",
			height: "50px",
			fontSize: "large"

		}

		const buttonStyle = {
			width: "100px",
			height: "50px"
		}

			return (
				<div style = {outerDiv}>
					<label className="label"></label>
					<input style= {searchDiv} id="name" type="text" placeholder= "Text to Search"/>
					<button style={buttonStyle}> Submit </button>
					<div style= {innerDiv}>
						<p>
							Users: {this.state.users}
						</p>
						<p>
							Tweet: {this.state.Tweet}
						</p>
					</div>
				</div>
			)
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
