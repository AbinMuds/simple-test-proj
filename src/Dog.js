import React, { Component } from 'react'

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
    width: "200px",
    height: "200px",
};

export default class Dog extends Component {
    render() {
        return (
            <>
                <section className="section">
                    <div style={contentStyles}>
                        <img alt="dog" src={this.props.dogImage} />
                    </div>
                </section>
            </>
        )
    }
}
