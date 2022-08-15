import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Pages from './Components/Pages';
import Elements from './Components/Elements';
import Sales from './Components/Sales';
import Products from './Components/Products';
import Shop from './Components/Shop';
import Scroll from './Components/Scroll';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (<>
  
    <Navbar />
    <Scroll/>

    <Router>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Pages' element={<Pages/>}/>
        <Route path='/Elements' element={<Elements/>}/>
        <Route path='/Sales' element={<Sales/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Shop' element={<Shop/>}/>
    </Routes>
    </Router>
    <Footer/>
    
    </>
  )
}

export default App;
