import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {

	constructor(){
		super()
		this.state = {
			user: "Elon Musk",
			tweet: "Something",
		}
	}
	componentDidMount() {
		axios.post(`https://api.twitter.com/oauth2/token`)
      		.then(res => {
        		"x-www-form-urlencoded" = {
        			"grant_type:client_credentials"
        		};
        		authorization = {
        			username: "79Kfiv6pxCQfYP1ONK3cBeR5J",
        			password: "g9uHbJCyrNBWqQ7YMDT7L4Nypxlr4f3pwqYE6oG8radnEYVmuf"
        		};
      		})
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
			width: "110px",
			height: "55px"
		}

			return (
				<div style = {outerDiv}>
					<label className="label"></label>
					<input style = {searchDiv} id="name" type="text" placeholder= "Text to Search"/>
					<button style={buttonStyle}> Submit </button>
					<div style= {innerDiv}>
						<p>
							Users: {this.state.user}
						</p>
						<p>
							Tweet: {this.state.tweet}	
						</p>
					</div>
				</div>
			)
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
