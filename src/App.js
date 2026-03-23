import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import SearchResults from './pages/SearchResults';


function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="text-center mt-10 text-3xl">Home<Home /></h1>} />
        <Route path="/products" element={<h1 className="text-center mt-10 text-3xl">Products</h1>} />
       <Route path="/search/:query" element={<SearchResults />}/>
        <Route path="/login" element={<h1 className="text-center mt-10 text-3xl">Login<LoginPage/></h1>} />
        <Route path="/register" element={<h1 className="text-center mt-10 text-3xl">Register<RegisterPage/></h1>} />
         <Route path="/product/:id" element={<h1 className="text-center mt-10 text-3xl">Product Details<ProductDetails/></h1>}/>  
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route
    path="/cart"
    element={
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    }
  />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
