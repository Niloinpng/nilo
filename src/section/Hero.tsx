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
      ? 'Focando na excelência do software e na criação de sistemas que priorizem, acima de tudo, a melhor experiência para o usuário final'
      : 'Focusing on software excellence and creating systems that prioritize, above all, the best experience for the end user',
    resumeButton: language === 'pt' ? 'Currículo Completo' : 'Complete Resume'
  }

  return (
    <div className="flex flex-col px-4 lg:px-12 lg:pb-4">
      <div className="flex items-center justify-center w-full">
        <h1 className="font-spartan font-bold text-6xl lg:text-[19rem] text-preto dark:text-branco text-center py-4 lg:py-0">
          {translations.portfolio}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:items-stretch gap-4 lg:gap-8 items-start lg:-translate-y-8">
        <div className="md:flex-[0.6] md:self-stretch flex justify-center md:justify-end md:items-center">
          <img 
            src={arteImage} 
            alt="Imagem do Congresso Nacional" 
            className="rounded-lg max-w-full h-auto md:h-full md:max-h-100 md:w-auto object-contain"
          />
        </div>

        <div className="flex flex-col justify-between md:flex-[0.4] md:self-stretch">

          <div className="flex flex-col gap-2 lg:gap-6">
            <h1 className="font-bold text-2xl lg:text-5xl text-preto dark:text-branco">
              {translations.title}
            </h1>
            <h2 className="lg:text-3xl text-preto/80 dark:text-branco/80 italic">
              {translations.subtitle}
            </h2>
            <h3 className="lg:text-xl text-preto/80 dark:text-branco/80">
              {translations.description}
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
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
    </div>
  )
}

export default Hero

