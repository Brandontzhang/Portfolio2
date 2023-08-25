import './App.css'
import { Navbar } from './components'
import { About, Footer, Header, Skills, Work } from './container'


function App() {
  return (
    <main className='bg-primary font-mono'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Work />
      <Footer />
    </main>
  )
}

export default App
