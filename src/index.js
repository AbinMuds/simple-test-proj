import React, { Component } from "react";
import ReactDOM from "react-dom";
import Joke from './Joke';
import Kawaii from './Kawaii';
import Button from './Button';
import Dog from './Dog';

import "./styles.css";
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
	state = {
		dogImage: [],
		apiData : 'Chuck Norris once pissed in a gas tank of a semi truck as a joke - that truck is now know as Optimus Prime',
		mood: '',
	};

	getApiData() {
		this.setState({mood: 'sad'})
		Promise.all([
			fetch('https://api.chucknorris.io/jokes/random').then(response => response.json()),
			fetch(`https://dog.ceo/api/breeds/image/random`).then(response => response.json())
		]).then((data) => {
			let newState = {}
			newState.apiData = data[0].value
			newState.dogImage = data[1].message
			newState.mood = 'happy'
			this.setState(newState)
		})
	}	
	
	componentDidMount() {
		this.getApiData()
	}

	render() {
		return (
			<div className="main">
				<Dog dogImage={this.state.dogImage} />
				<Joke joke={this.state.apiData} />
				<Kawaii mood={this.state.mood} />
				<Button reset={this.getApiData.bind(this)} />
			</div>
		);
	}
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);