import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Home } from '../pages/Home';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/event/lesson/:slug' element={<Home />} />
      </Router>
    </BrowserRouter>
  );
}
