import React, { Component } from 'react';

import {Planet} from 'react-kawaii';

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

export default class Kawaii extends Component {
    render() {
        return (
            <>
                <section className="section">
                    <div style={contentStyles}>
                    <Planet size={200} mood={this.props.mood} color="#FDA7DC" />
                    </div>
                </section>
            </>
        )
    }
}
