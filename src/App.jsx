import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from "./pages/ProductsPage";
import CreateProductPage from "./pages/CreateProductPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import NotfoundPage from "./pages/NotfoundPage";

import { ToastContainer, Flip } from 'react-toastify';

function App() {


  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/create' element={<CreateProductPage />} />
          <Route path='/update/:id' element={<UpdateProductPage />} />
          <Route path='*' element={<NotfoundPage />} />
        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Flip}
        />
      </div>
    </>
  )
}

export default App
