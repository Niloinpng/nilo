import { useState, useEffect } from 'react'
import DarkModeToggle from '../components/DarkModeToggle'
import LanguageToggle from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'

function NavBar() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'projetos', 'contato']
      const scrollPosition = window.scrollY + 100

      setIsScrolled(window.scrollY > 0)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() 

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { id: 'inicio', labelPt: 'Inicio', labelEng: 'Home' },
    { id: 'sobre', labelPt: 'Sobre', labelEng: 'About' },
    { id: 'projetos', labelPt: 'Projetos', labelEng: 'Projects' },
    { id: 'contato', labelPt: 'Contato', labelEng: 'Contact' }
  ].map(item => ({
    ...item,
    label: language === 'pt' ? item.labelPt : item.labelEng
  }))

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
    ${isScrolled ? 
      'border border-preto/10 dark:border-branco/10 mt-2 lg:mt-4 mx-2 lg:mx-120 rounded-full bg-branco/85 dark:bg-preto/85 backdrop-blur-xs px-2 lg:px-4' : 
      'border border-transparent px-2 lg:px-10'}`}>
      <div className="mx-auto p-2 lg:py-3">
        <div className="grid grid-cols-3 items-center w-full">

          <div className="flex justify-start">
           <LanguageToggle />
          </div>

          <div className="flex justify-center items-center gap-3 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-xs lg:text-sm  text-preto dark:text-branco transition-colors hover:text-azul dark:hover:text-azul-2 py-2"
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-azul dark:bg-azul-2"></span>
                )}
              </button>
            ))}
          </div>

          <div className="flex justify-end gap-3 lg:gap-4">

            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

