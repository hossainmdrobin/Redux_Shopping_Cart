import logo from './logo.svg';
import './App.css';
import { Button } from 'react-daisyui'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import car1 from './assets/car1.jpg'
import car2 from './assets/car2.jpg'
import car3 from './assets/car3.jpg'
import ProductSingle from './components/ProductSingle/ProductSingle';


const products = [
  {
      id: '1',
      name: 'BMW',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptatem iure nihil sequi repudiandae, expedita exercitationem quas tempora! Provident, quo',
      photo:car1,
      price:1200
  },
  {
      id: '2',
      name: 'FERARI',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptatem iure nihil sequi repudiandae, expedita exercitationem quas tempora! Provident, quo',
      photo:car2,
      price:1300
  },
  {
      id: '3',
      name: 'AUDY',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptatem iure nihil sequi repudiandae, expedita exercitationem quas tempora! Provident, quo',
      photo:car3,
      price:1100
  }
]

function App() {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/product/:id' element={<ProductSingle/>}/>
      </Routes>
    </div>
  );
}

export default App;
