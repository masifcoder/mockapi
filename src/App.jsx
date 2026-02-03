import { useState } from 'react'
import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from "./pages/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage";

function App() {
 

  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage /> } />
          <Route path='/products' element={<ProductPage /> } />
          <Route path='/create' element={<CreateProductPage /> } />
            {/* if user search a route which is not handled what will happend ???? */}
        </Routes>
      </div>
    </>
  )
}

export default App
