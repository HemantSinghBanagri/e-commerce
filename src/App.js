import Home from './Component/routes/home/Home.component';
import './App.scss';

import { Route,Routes } from 'react-router-dom';
import Navigation from './Component/routes/Navigation/Navigation';
import Signin from './Component/routes/signIn/Signin';
import Shop from './Component/routes/shop/shop';
import Checkout from './Component/routes/Checkout/Checkout';

function App() {
  return(
    
   <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route path='/signin' element={<Signin/>}/>
      <Route index element={<Home/>}/>
      <Route path="shop/*" element={<Shop/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      

    </Route>
   </Routes>
      
    
  )
}

export default App;
