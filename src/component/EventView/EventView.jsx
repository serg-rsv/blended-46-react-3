import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fetchEvents } from '../../services/api';
import { Link } from '../Layout/Layout.styled';

export const EventView = () => {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <ul>
        {events.length > 0 &&
          events.map(({ id, name }) => (
            <li key={id}>
              <Link to={id} state={{ from: location }}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
};
