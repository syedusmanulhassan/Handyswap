import './App.css'
import Header from './Navigation/Header/header'
import Home from './Pages/Home/home'
import About from './Pages/About/about'
import Footer from './Navigation/Footer/footer'
import { Routes, Route } from "react-router-dom";
import Services from './Pages/Services/service'
import Contact from './Pages/Contact/contact'
import Blog from './Pages/Blog/Blog'
import BlogPost1 from './Pages/Blog/BlogPost1'
import BlogPost2 from './Pages/Blog/BlogPost2'

function App() {

  return (
    <>
    <Header/> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/blog/blog-1" element={<BlogPost1/>} />
      <Route path="/blog/blog-2" element={<BlogPost2/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App



