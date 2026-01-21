import { useState, useEffect } from 'react'
import minhaFoto from '../assets/images/minhafoto.png'
import { useLanguage } from '../contexts/LanguageContext'

function About() {
  const { language } = useLanguage()
  
  const fullText = language === 'pt' ? 'Olá, Mundo!' : 'Hello, World!'
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

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])
  
  useEffect(() => {
    setDisplayedText('')
    setIsDeleting(false)
  }, [language])

  const translations = {
    title: language === 'pt' ? 'SOBRE' : 'ABOUT',
    subtitle: language === 'pt' 
      ? 'Criatividade, Aprendizado, Foco e Código'
      : 'Creativity, Learning, Focus and Code',
    text1Pt: 'Pode me chamar de Nilo. Sou desenvolvedor web e mobile, brasileiro',
    text1Eng: 'You can call me Nilo. I am a web and mobile developer, Brazilian',
    text1Pt2: 'e atualmente sou graduando em Ciência da Computação na UnB. Acredito que o software só é excelente quando prioriza, acima de tudo, a experiência de quem o utiliza.',
    text1Eng2: 'and currently a Computer Science undergraduate at UnB. I believe that software is only excellent when it prioritizes, above all, the experience of those who use it.',
    text2: language === 'pt'
      ? 'Minha trajetória prática começou há 3 anos na CJR (Empresa Júnior), onde desenvolvi Front-end e Back-end. De lá para cá, passei pelo Sebrae Nacional — onde explorei desde automações até dashboards — e hoje atuo na Cast como desenvolvedor Front-end. Tenho domínio sólido de tecnologias como React, React Native e Tailwind CSS, sempre buscando entregar código limpo e escalável.'
      : 'My practical journey began 3 years ago at CJR (Junior Company), where I developed Front-end and Back-end. From there, I went through Sebrae Nacional — where I explored everything from automations to dashboards — and today I work at Cast as a Front-end developer. I have solid mastery of technologies like React, React Native and Tailwind CSS, always seeking to deliver clean and scalable code.',
    text3: language === 'pt'
      ? 'Além do código, acredito que a tecnologia deve ser um espaço de inclusão. Atualmente, busco novos desafios que me permitam aprimorar minhas habilidades, contribuindo para o crescimento do time e entregando produtos digitais de impacto.'
      : 'Beyond code, I believe that technology should be a space for inclusion. Currently, I seek new challenges that allow me to improve my skills, contributing to team growth and delivering impactful digital products.'
    }

  return (
    <section className="px-4 py-8 lg:py-24">
      <div className="flex flex-col max-w-6xl mx-auto gap-4">

        <h1 className="font-spartan font-extrabold text-xl lg:text-3xl text-preto dark:text-branco text-center">
          {translations.title}
        </h1>

        <h2 className="font-spartan text-xl lg:text-3xl text-preto/90 dark:text-branco/90 text-center">
          {translations.subtitle}
        </h2>

        <div className="flex flex-col md:flex-row md:items-stretch gap-6 lg:gap-8">
          <div className="md:flex-[0.5] flex justify-center md:justify-start md:items-center">
            <img 
              src={minhaFoto} 
              alt="Foto de Nilo Silveira" 
              className="rounded-lg max-w-full h-auto md:max-h-[600px] md:w-auto object-contain"
            />
          </div>

          <div className="md:flex-[0.5] flex flex-col justify-center gap-2">
            <h1 className="text-sm lg:text-xl text-preto/80 dark:text-branco/80 leading-relaxed">
              {displayedText}
              <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
            </h1>
            <p className="text-sm lg:text-lg text-preto/80 dark:text-branco/80 leading-relaxed">
              {language === 'pt' ? translations.text1Pt : translations.text1Eng} <span className="text-lg">🇧🇷</span> {language === 'pt' ? translations.text1Pt2 : translations.text1Eng2}
            </p>
            <p className="text-sm lg:text-lg text-preto/80 dark:text-branco/80 leading-relaxed">
              {translations.text2} 
            </p>
            <p className="text-sm lg:text-lg text-preto/80 dark:text-branco/80 leading-relaxed">
              {translations.text3} 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
