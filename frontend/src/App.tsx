import './App.css'
import { Navbar } from './components'
import { About, Footer, Header, Skills, Work } from './container'
import AppWrap from './wrapper/AppWrap'


function App() {
  return (
    <AppWrap>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </AppWrap>
  )
}

export default App
