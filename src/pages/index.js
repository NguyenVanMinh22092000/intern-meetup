import MeetupList from '../components/meetups/MeetupList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchDestinations} from "../redux/destination-redux";
function HomePage() {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);
  return <MeetupList meetups={destinations} />
}

export default HomePage;