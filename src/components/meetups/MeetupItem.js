import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

class MeetupItem extends Component {
  showDetailsHandler = () => {
    this.props.router.push('/' + this.props.id);
  };

  render() {
    return (
        <li className={classes.item}>
          <Card>
            <div className={classes.image}>
              <img src={this.props.image} alt={this.props.title} />
            </div>
            <div className={classes.content}>
              <h3>{this.props.title}</h3>
              <address>{this.props.address}</address>
            </div>
            <div className={classes.actions}>
              <button onClick={this.showDetailsHandler}>Show Details</button>
            </div>
          </Card>
        </li>
    );
  }
}

export default withRouter(MeetupItem);
