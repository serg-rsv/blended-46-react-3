import { Link } from 'react-router-dom';
import { useFetchEvent } from '../../hooks/useFetchEvent';

export const EventSubView = () => {
  const event = useFetchEvent();
  return (
    <>
      {event && (
        <div>
          <img src={event.images[0].url} width="400" alt={event.name} />
          <p>{event.name}</p>
          <Link to="details">Get more details</Link>
        </div>
      )}
    </>
  );
};
