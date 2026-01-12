import { useState, useEffect } from 'react'
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import arteImage from '../assets/images/imagemherosection.png'
import ActionButton from '../components/ActionButton'

function Hero() {
  const fullText = 'Hello, World!'
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: number

    if (!isDeleting && displayedText.length < fullText.length) {
      timeout = window.setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1))
      }, 100)
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timeout = window.setTimeout(() => {
        setIsDeleting(true)
      }, 5000)
    } else if (isDeleting && displayedText.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1))
      }, 50)
    } else if (isDeleting && displayedText.length === 0) {
      timeout = window.setTimeout(() => {
        setIsDeleting(false)
      }, 500)
    }

    return () => window.clearTimeout(timeout)
  }, [displayedText, isDeleting, fullText])

  // Animação do cursor piscando
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div className="flex flex-col px-4 lg:px-12 lg:pb-4">
      {/* Título PORTFOLIO muito grande */}
      <div className="flex items-center justify-center w-full">
        <h1 className="font-spartan font-bold text-6xl lg:text-[19rem] text-preto dark:text-branco text-center py-4 lg:py-0">
          PORTFÓLIO
        </h1>
      </div>

      {/* Duas colunas */}
      <div className="flex flex-col md:flex-row md:items-stretch gap-4 lg:gap-8 items-start">
                {/* Segunda coluna: Imagem - 40% no desktop, altura igual à coluna do texto */}
                <div className="md:flex-[0.64] md:self-stretch flex justify-center md:justify-end md:items-center">
          <img 
            src={arteImage} 
            alt="Danilo Silva" 
            className="rounded-lg max-w-full h-auto md:h-full md:max-h-100 md:w-auto object-contain"
          />
        </div>
        {/* Primeira coluna: Botões primeiro, depois texto - 60% no desktop */}
        <div className="flex flex-col gap-2 lg:gap-6 md:flex-[0.36]">

          {/* Hello World... Nilo */}
          <div className="flex flex-col gap-2 lg:gap-6">
            <h1 className="font-bold text-2xl lg:text-5xl text-preto dark:text-branco">
              {displayedText}
              <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
            </h1>
            <h2 className="lg:text-2xl text-preto dark:text-branco">
              Eu sou o <span className="font-bold">Nilo Silveira</span>, desenvolvedor full-stack.
            </h2>
          </div>
          
          {/* Botões */}
          <div className="flex flex-wrap gap-6">
            <ActionButton
              icon={FaWhatsapp}
              title="WhatsApp"
              link="https://wa.me/5561986593970"
            />
            <ActionButton
              icon={FaLinkedin}
              title="LinkedIn"
              link="'https://www.linkedin.com/in/danilo-silveira-da-silva-1978ba237/"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <ActionButton
              title="Currículo Completo"
              link="https://drive.google.com/file/d/18_Ga_S-LnsEJlb3FmXEHlU4yGhMFwzCX/view?usp=sharing"
              azul={true}
            />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Hero

