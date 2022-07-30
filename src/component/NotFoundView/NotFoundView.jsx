import { Link } from 'react-router-dom';

export const NotFoundView = () => {
  return (
    <p>
      Content not found go to <Link to="/">home page</Link>
    </p>
  );
};
