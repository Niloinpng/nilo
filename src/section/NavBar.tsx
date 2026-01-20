import { useState, useEffect } from 'react'
import DarkModeToggle from '../components/DarkModeToggle'
import LanguageToggle from '../components/LanguageToggle'

function NavBar() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'projetos', 'contato']
      const scrollPosition = window.scrollY + 100

      // Verificar se saiu do topo
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
    handleScroll() // Verificar seção inicial

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Ajuste para altura da navbar fixa
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' }
  ]

  return (
    <nav className={`lg:px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 
    ${isScrolled ? 
      'border border-preto/10 dark:border-branco/10 mt-2 lg:mt-4 mx-2 lg:mx-120 rounded-full bg-branco/85 dark:bg-preto/85 backdrop-blur-xs' : 
      'border border-transparent lg:px-12'}`}>
      <div className="px-2 mx-auto py-2 lg:py-3">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center w-full">
          {/* Logo à esquerda - apenas desktop */}
          <div className="hidden md:flex">
            <img  
              src="/logo.png" 
              alt="Logo" 
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Navegação - esquerda no mobile, centro no desktop */}
          <div className="flex justify-start md:justify-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-xs lg:text-sm font-medium text-preto dark:text-branco transition-colors hover:text-azul dark:hover:text-azul-2 py-2"
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-azul dark:bg-azul-2"></span>
                )}
              </button>
            ))}
          </div>

          {/* Botões à direita */}
          <div className="flex justify-end gap-3 lg:gap-4">
            <LanguageToggle />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

