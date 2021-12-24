
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import './App.css';
import About from './components/About/About';
import ArgumnetHome from './components/Argument/ArgumnetHome/ArgumnetHome';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NavbarOne from './components/navbarOne/NavbarOne';
import Portfolio from './components/Portfolio/portfolio/Portfolio';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        

    <NavbarOne></NavbarOne>

        <Switch>
    
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
           <Route path="/portfolio">
             <Portfolio/>
           </Route>
           <Route path="/contact">
             <Contact/>
           </Route>
           <Route path="/argument">
             <ArgumnetHome/>
           </Route>
        </Switch>
        <Footer/>
          </BrowserRouter>
    </div>
  );
}

export default App;
