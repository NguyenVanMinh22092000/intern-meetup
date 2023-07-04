import React, { Component } from 'react';
import classes from './MeetupDetail.module.css';

class MeetupDetail extends Component {
    render() {
        return (
            <section className={classes.detail}>
                <img src={this.props.image} alt={this.props.title} />
                <h1>{this.props.title}</h1>
                <address>{this.props.address}</address>
                <p>{this.props.description}</p>
            </section>
        );
    }
}

export default MeetupDetail;
