import './App.css';

import Product from './products/products';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Content from './Components/HomePage/Content';
function App(Link) {
  return (
      <div className="App">
          <Navbar Link={Link}/>
          <Content/>
          <Footer/>
      </div>
  );
}
export default App;