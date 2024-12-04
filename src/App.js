import './App.css';
import ACNLearn from './components/ACNLearn';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Navigation from './components/Navigation';
import ProductDetails from './components/ProductDetails';
import Categories from './components/Categories';
import Form from './components/Form';
import Bootstrap from './components/Bootstrap';
import SI from './components/SI';

function App() {
  
  return (
    <div className="App">
     
      <Router>
      <Navigation/>
        <Routes>
        <Route path="/" element={<ACNLearn/>}/>
        <Route path="/product" element={<Product/>}/>
       
        <Route path="/product/productdetail/:pname/:pid/:manf/:price" element={<ProductDetails/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/categories/forms" element={<Form/>}/>
        <Route path="/categories/bootstrap" element={<Bootstrap/>}/>
        <Route path="/categories/calculator" element={<SI/>}/>
        </Routes>
     </Router>
    </div>

  );
}

export default App;
