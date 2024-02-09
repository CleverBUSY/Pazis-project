// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Categories/>} />
        <Route path="/products/:categoryId" element={<Products/>} />
    </Routes>
  );
}

export default App;
