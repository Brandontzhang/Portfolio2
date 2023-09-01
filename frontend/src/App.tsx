import './App.css'
import { Navbar } from './components'
import { About, Footer, Header, Work } from './container'
import SkillsAndExperience from './container/SkillsAndExperience'
import AppWrap from './wrapper/AppWrap'


function App() {
  return (
    <AppWrap>
      <Navbar />
      <Header />
      <About />
      <Work />
      <SkillsAndExperience />
      <Footer />
    </AppWrap>
  )
}

export default App
