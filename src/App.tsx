import NavBar from './section/NavBar'
import Hero from './section/Hero'
import Skills from './section/Skills'
import ADM from './section/projetos/ADM'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Titulo from './components/Titulo'
import Meau from './section/projetos/Meau'
import Template from './section/projetos/Template'
import Twitter from './section/projetos/Twitter'

function App() {

  return (
    <>
      <div className="bg-pattern-balls w-full min-h-screen ">
        <NavBar />
        <Hero />
        <Skills />
        
        <div className="flex flex-col lg:py-4">
          <Titulo
            titulo="PROJETOS"
          />
          <ADM />
          <Meau />
          <Twitter />
          <Template />
        </div>

        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
