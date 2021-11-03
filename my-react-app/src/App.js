
import './App.css';
import Home from './components/Home';
import { About } from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Shop from './components/shop';
import UserServices from './components/Services/UserServices';
import Navigate from './components/Navigate';

function App() {
  return (
    <Router>
      <Navigate />
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Route path="/us" component={UserServices} />
      </switch>
    </Router>
  );
}

export default App;
