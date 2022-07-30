import { Routes, Route } from 'react-router-dom';
import { Layout } from './component/Layout/Layout';
import { HomeView } from './component/HomeView/HomeView';
import { EventView } from './component/EventView/EventView';
import { EventSubView } from './component/EventSubView/EventSubView';
import { EventDetailsView } from './component/EventDetailsView/EventDetailsView';
import { NotFoundView } from './component/NotFoundView/NotFoundView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="events" element={<EventView />}>
          <Route path=":eventId" element={<EventSubView />} />
        </Route>
      </Route>
      <Route path="events/:eventId/details" element={<EventDetailsView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
