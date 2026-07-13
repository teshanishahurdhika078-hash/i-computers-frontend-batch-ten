import { Route } from 'react-router-dom';
import './App.css'
import AdminPage from './pages/adminPage';
import HomePage from './pages/homePage';
import ProductCard from './components/productCard';
import TrendingProducts from './components/trendingProducts';

function App() {
  return (
    <>
      <div className ="w-full h-screen border-[6px] flex justify-center items-center">
      <Routes>
     <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/products" element={<productPage />} />

      </Routes>


        </div>
    
    </>
    
  );
}

export default App;