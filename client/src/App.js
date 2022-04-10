import React from 'react';
import {
  BrowserRouter,
  Routes as RoutesContainer,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login'
import Home from './Home'

const App = () => (
  <BrowserRouter>
    <RoutesContainer>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </RoutesContainer>
  </BrowserRouter>
)

export default App;
