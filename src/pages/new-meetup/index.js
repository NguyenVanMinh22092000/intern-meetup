import React from 'react';
import { useDispatch } from 'react-redux';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { addDestination } from '../../redux/destination-redux';

function NewMeetupPage() {
  const dispatch = useDispatch();

  function addMeetupHandler(enteredMeetupData) {
    dispatch(addDestination(enteredMeetupData));
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
