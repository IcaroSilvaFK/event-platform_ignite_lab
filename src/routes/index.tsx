import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Login />} />
        <Route path='/events' element={<Home />} />
        <Route path='/event/lesson/:slug' element={<Home />} />
      </Router>
    </BrowserRouter>
  );
}
