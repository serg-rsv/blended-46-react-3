import { useNavigate, useLocation } from 'react-router-dom';
import { useFetchEvent } from '../../hooks/useFetchEvent';

export const EventDetailsView = () => {
  const event = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {event && (
        <>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go Back
          </button>
          <img src={event.images[0].url} width="600" alt={event.name} />
          <h3>{event.name}</h3>
          <p>Genre: {event.classifications[0].genre.name}</p>
          <p>Sub genre: {event.classifications[0].subGenre.name}</p>
        </>
      )}
    </>
  );
};
