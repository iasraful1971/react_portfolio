
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import FloatingWhatsApp from 'react-floating-whatsapp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import './App.css';
import About from './components/About/About';
import ArgumnetHome from './components/Argument/ArgumnetHome/ArgumnetHome';
import BackToTop from './components/BackToTop/BackToTop';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NavbarOne from './components/navbarOne/NavbarOne';
import Portfolio from './components/Portfolio/portfolio/Portfolio';
import Privency from './components/Privency/Privency';
import ScrollToTop from './components/ScrollToTop';
import photo from './images/asraful style picture.png';
function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <BackToTop/>
           <ScrollToTop/>
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
          {/* <MessengerCustomerChat
          pageId="102089495265783"
           appId="1234412133752549"/> */}
            <FloatingWhatsApp 
        phoneNumber="+8801633780292" 
        accountName="Muhammad Asraful"
        avatar={photo}
        statusMessage="Typically replies within 1 hour"
        chatMessage="How can I help you Darling? "
        darkMode= {true}
        notification={true}
        />

    </div>
  );
}

export default App;
