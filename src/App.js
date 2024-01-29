import Arrivals from './components/arrivals/Arrivals';
import Brands from './components/brands/Brands';
import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Block from './components/Block/Block';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/footer/Footer';
import Video from './components/video/video';
import Input from './components/input/input';
import Home from './components/home/home';
import Granit from './components/granit/granit';
import Stek from './components/stek/Stek';
import About from './components/aboutus/Aboutus';
import Projectstek from './components/project/project_stek';
import Projectanother from './components/project/project_another';
import Projects from './components/project/projects';
import Projecter from './components/project/Projecter';
import Projecter2 from './components/project/projecter2';
import Projecter3 from './components/project/projecter3';
import MapComponent from './components/googlemap/googlemap';
import { AiFillContacts } from 'react-icons/ai';
import Contact from './components/contact/contact';
import Blog from './components/blog/blog';
import Whyme from './components/Whyme/Whyme';
import Another from './components/Another/Another';
import { TranslationProvider } from './translate/TranslationContext';
import ScrollToTop from './scrollTop/ScrolltoTop';

function App() {
  return (
    <TranslationProvider>
		<div className="App">
  
    <Router>
    <ScrollToTop>
      <Header/>
          <Routes>              
					<Route path="/" element={<Home/>} />
          <Route path="/projectstek" element={<Projectstek/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectsanother" element={<Projectanother />} />
					<Route path="/project/:id" element={<Projecter/>} />
          <Route path="/projectstek/:id" element={<Projecter2/>} />
          <Route path="/projectsanother/:id" element={<Projecter3/>} />
					<Route path="/granit" element={<Granit/>} />
					<Route path="/steklo" element={<Stek/>} />
					<Route path="/about" element={<About/>} />
          <Route path="/another" element={<Another/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
				</Routes>
        </ScrollToTop>
      <Footer/>
    </Router>
		</div>
    </TranslationProvider>
  );
}

export default App;
