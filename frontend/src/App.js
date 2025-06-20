import { Routes, Route } from 'react-router-dom';
import Homepage from './landing_page/home/Homepage';
import NotFound from './landing_page/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
