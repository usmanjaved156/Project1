import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Pages from './Components/Pages';
import Elements from './Components/Elements';
import Sales from './Components/Sales';
import Products from './Components/Products';
import Shop from './Components/Shop';

function App() {
  return (<>
    <Navbar />
    <Home/>
    <Pages/>
    <Elements/>
    <Sales/>
    <Products/>
    <Shop/>
    <Footer/>
    </>
  )
}

export default App;
