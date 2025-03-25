import './App.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Price from './Components/Price/Price'
import Review from './Components/Review/Review'
import Services from './Components/Services/Services'

function App() {

  return (
    <>
      <div>
        <Header />
        <Home />
        <Services />
        <About />
        <Price />
        <Review/>
        <Footer/>
      </div>
    </>
  )
}

export default App
