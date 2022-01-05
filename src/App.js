
import MessengerCustomerChat from 'react-messenger-customer-chat';
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
import Privency from './components/Privency/Privency';
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
           <Route path="/privency">
             <Privency/>
           </Route>
        </Switch>
        <Footer/>
          </BrowserRouter>
          <MessengerCustomerChat
          pageId="102089495265783"
           appId="1234412133752549"
        
  />

    </div>
  );
}

export default App;
