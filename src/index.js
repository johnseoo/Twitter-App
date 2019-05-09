import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor(){
		super()
		this.state = {
			datas: [],
			isLoaded: false,
		}
	}

	componentDidMount(){

		fetch('https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular')
		.then(res => res.json())
		.then(json => {
			this.setState ({
				isLoaded: true,
				datas: json,
			})
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
			width: "100px",
			height: "100px"
		}

		var {isLoaded, items} = this.state;

		if (!isLoaded) {
			return <div>Loading..</div>
		}
		else {

			return (
				<div style = {outerDiv}>
					<label className="label"></label>
					<input style= {searchDiv} id="name" type="text" placeholder= "Text to Search"/>
					<button style={buttonStyle}> Submit </button>
					<div style= {innerDiv}>
						<ul>
							{datas.map(data => (
								<li key={data.id}>
									Users: {data.user.name}
								</li>
								<li>
									Tweet: {data.text}
								</li>
								))}
						</ul>
					</div>
				</div>
			)
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
