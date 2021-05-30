import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import ProductInfo from './views/ProductInfo';
import About from './views/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/ProductInfo" component={ProductInfo}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


