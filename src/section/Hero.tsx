import { FaWhatsapp, FaLinkedin } from 'react-icons/fa'
import arteImage from '../assets/images/imagemherosection.png'
import ActionButton from '../components/ActionButton'
import { useLanguage } from '../contexts/LanguageContext'

function Hero() {
  const { language } = useLanguage()

  const translations = {
    portfolio: language === 'pt' ? 'PORTFÓLIO' : 'PORTFOLIO',
    title: 'Nilo Silveira da Silva',
    subtitle: language === 'pt' 
      ? 'Desenvolvedor Front-End & Full-Stack' 
      : 'Front-End & Full-Stack Developer',
    description: language === 'pt'
      ? 'Focando na excelência do software e na criação de sistemas que priorizem a melhor experiência para o usuário final.'
      : 'Focusing on software excellence and creating systems that prioritize the best experience for the end user.',
    resumeButton: language === 'pt' ? 'Currículo Completo' : 'Complete Resume'
  }

  return (
    <div className="flex flex-col relative">
      {/* Duas colunas */}
      <div className="flex flex-col md:flex-row gap-4 pb-8 lg:pb-0 lg:gap-8 px-10 lg:pt-20">
        {/* Coluna 1: 3 títulos PORTFOLIO (60%) */}
        <div className="md:flex-[0.6] flex flex-col items-center justify-center">
          <h1 className="font-spartan font-bold text-6xl lg:text-[11rem] text-preto dark:text-branco text-center relative z-20">
            {translations.portfolio}
          </h1>
          <h1 className="font-spartan font-bold text-6xl lg:text-[11rem] text-preto/15 dark:text-branco/20 text-center select-none pointer-events-none lg:-translate-y-10">
          PORTFOLIO
          </h1>
          <h1 className="font-spartan font-bold text-6xl lg:text-[11rem] text-preto/10 dark:text-branco/10 text-center select-none pointer-events-none lg:-translate-y-22">
          PORTFOLIO
          </h1>
        </div>

        {/* Coluna 2: Textos e botões (40%) */}
        <div className="md:flex-[0.4] flex flex-col justify-start gap-10 lg:pt-8">
          {/* Textos alinhados ao topo */}
          <div className="flex flex-col gap-3 lg:gap-8">
            <h1 className="font-bold font-spartan text-2xl lg:text-6xl text-preto dark:text-branco">
              {translations.title}
            </h1>
            <h2 className="lg:text-4xl text-preto/95 dark:text-branco/95 italic">
              {translations.subtitle}
            </h2>
            <h3 className="lg:text-2xl text-preto/95 dark:text-branco/95">
            {translations.description}
            </h3>
          </div>
          
          {/* Botões alinhados abaixo */}
          <div className="flex flex-col md:flex-row gap-6">
            <ActionButton
              title={translations.resumeButton}
              link="https://drive.google.com/file/d/18_Ga_S-LnsEJlb3FmXEHlU4yGhMFwzCX/view?usp=sharing"
              azul={true}
            />
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
        </div>
      </div>

      {/* Imagem abaixo */}
      <div className="w-full">
        <img 
          src={arteImage} 
          alt="Imagem do Congresso Nacional" 
          className="w-full lg:h-[400px] xl:h-[600px] object-cover"
        />
      </div>
    </div>
  )
}

export default Hero

