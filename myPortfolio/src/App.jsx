import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Project from './components/Project'
import Tools from './components/Tools'
import Testimonials from './components/Testimonials'
import Socials from './components/Socials'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Project/>
      <Tools/>
      <Testimonials/>   
      <Socials/>   
      <Footer/>
    </div>
  )
}

export default App
