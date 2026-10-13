import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../components/NavBar/navbar';
import Footer from '../components/Footer/footer';

import Home from '../pages/HomePage/home';
import About from '../pages/AboutPage/about';
import Contact from '../pages/ContactPage/contact';
import Services from '../pages/ServicesPage/services';
import FamilyArticle from '../pages/FamilyArticlePage/family-mediation';
import Recommend from '../pages/RecommendPage/recommend';
import ScrollToTop from "../components/ScrollTotop/scrolltotpo"; // ייבוא הקובץ



function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <ScrollToTop /> {/* הפעלת הפונקציונליות */}

        <main className="container mx-auto px-4 mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/articles/family-mediation" element={<FamilyArticle />} />
            <Route path="/recommend" element={<Recommend />} />


         
          </Routes>
        </main>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
