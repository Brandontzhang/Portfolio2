import "./App.css";
import { Navbar } from "./components";
import { About, Contact, Header, Projects } from "./container";
import SkillsAndExperience from "./container/SkillsAndExperience";
import AppWrap from "./wrapper/AppWrap";

function App() {
    return (
        <AppWrap>
            <Navbar />
            <Header />
            <About />
            <Projects />
            <SkillsAndExperience />
            <Contact />
        </AppWrap>
    );
}

export default App;
