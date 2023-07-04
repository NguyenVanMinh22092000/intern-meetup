import React, { Component } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

class NewMeetupForm extends Component {
  titleInputRef = React.createRef();
  imageInputRef = React.createRef();
  addressInputRef = React.createRef();
  descriptionInputRef = React.createRef();

  submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = this.titleInputRef.current.value;
    const enteredImage = this.imageInputRef.current.value;
    const enteredAddress = this.addressInputRef.current.value;
    const enteredDescription = this.descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    this.props.onAddMeetup(meetupData);
    this.titleInputRef.current.value = '';
    this.imageInputRef.current.value = '';
    this.addressInputRef.current.value = '';
    this.descriptionInputRef.current.value = '';

    // Reset form
    event.target.reset();
  };

  render() {
    return (
        <Card>
          <form className={classes.form} onSubmit={this.submitHandler}>
            <div className={classes.control}>
              <label htmlFor='title'>Meetup Title</label>
              <input type='text' required id='title' ref={this.titleInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='image'>Meetup Image</label>
              <input type='url' required id='image' ref={this.imageInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='address'>Address</label>
              <input type='text' required id='address' ref={this.addressInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor='description'>Description</label>
              <textarea
                  id='description'
                  required
                  rows='5'
                  ref={this.descriptionInputRef}
              ></textarea>
            </div>
            <div className={classes.actions}>
              <button>Add Meetup</button>
            </div>
          </form>
        </Card>
    );
  }
}

export default NewMeetupForm;
