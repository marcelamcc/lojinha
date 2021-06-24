import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Route path={'/'}>
          <Products />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
