import './App.css';
import {Routes, Route} from 'react-router-dom'
import CustomerRouter from './Routers/CustomerRouter';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import AdminRouter from './Routers/AdminRouter';
function App() {
  return (
    <div className="">
      <Routes>
      <Route path='/*' element={<CustomerRouter/>}></Route>
      <Route path="/admin/*" element={<AdminRouter/>}></Route>
      </Routes>
       
    
      
    </div>

  );
}

export default App;
