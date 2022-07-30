import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchEvent } from '../services/api';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    fetchEvent(eventId).then(setEvent);
  }, [eventId]);

  return event;
};
