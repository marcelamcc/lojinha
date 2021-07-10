import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Products from './pages/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route path={'/'}>
          <Products />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
