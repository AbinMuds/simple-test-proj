import React, { Component } from 'react'

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

export default class Button extends Component {
    render() {
        return (
            <>
                <section className="section">
				    <div style={contentStyles}>
					    <button content="Primary" onClick={this.props.reset}>Reset</button>
				    </div>
			    </section>    
            </>
        )
    }
}
