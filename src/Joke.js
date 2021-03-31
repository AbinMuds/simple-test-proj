import React, { Component } from 'react'

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};


export default class Joke extends Component {
  render(){
    return (
        <section className="section">
			<div style={contentStyles}>
				<h3> {this.props.joke} </h3>
			</div>
		</section>
    )
  }
} 
