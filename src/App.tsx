import NavBar from './section/NavBar'
import Hero from './section/Hero'
import About from './section/About'
import Skills from './section/Skills'
import ADM from './section/projetos/ADM'
import Contact from './section/Contact'
import Footer from './section/Footer'
import Titulo from './components/Titulo'
import Meau from './section/projetos/Meau'
import Template from './section/projetos/Template'
import Twitter from './section/projetos/Twitter'
import fundoImage from './assets/images/fundo.jpg'

function App() {

  return (
    <>
      <div 
        className="w-full min-h-screen bg-branco dark:bg-preto relative"
      >
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${fundoImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            opacity: 0.0
          }}
        ></div>
        <div className="relative z-10">
        <NavBar />
        <div id="inicio" className="pt-20 lg:pt-24">
          <Hero />
        </div>
        
        <div id="sobre">
          <About />
        </div>

        <Skills />

        <div id="projetos" className="flex flex-col lg:py-4">
          <h1 className="font-extrabold text-xl lg:text-3xl text-preto dark:text-branco text-center">
            PROJETOS
          </h1>
          <ADM />
          <Meau />
          <Twitter />
          <Template />
        </div>

        <div id="contato">
          <Contact />
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
