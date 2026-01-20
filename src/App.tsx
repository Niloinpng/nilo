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
        <div id="inicio" className="pt-20 lg:pt-24">
          <Hero />
        </div>
        <div id="sobre">
          <Skills />
        </div>
        
        <div id="projetos" className="flex flex-col lg:py-4">
          <Titulo
            titulo="PROJETOS"
          />
          <ADM />
          <Meau />
          <Twitter />
          <Template />
        </div>

        <div id="contato">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
