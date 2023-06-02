import './App.css';
import { Nav } from './components/Nav/Nav';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import Trending from './components/Trending/Trending';
import Product from './components/Product/Product';
import Discount from './components/Discount/Discount';
import BoxItem from './components/BoxItem/BoxItem';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Showcase />
      <BoxItem />
      <Trending />
      <Product />
      <Product />
      <Product />
      <Discount />
      <Product />
      <Product />
      <BoxItem />
      <Footer />
    </div>
  );
}

export default App;
