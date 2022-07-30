import { Outlet } from 'react-router-dom';
import { Link } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'events'}>Events</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
