import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import ContactButton from '../components/ContactButton'
import { FaPaperclip } from "react-icons/fa6"
import { useLanguage } from '../contexts/LanguageContext'

function Contact() {
  const { language } = useLanguage()

  const translations = {
    title: language === 'pt' ? 'CONTATO' : 'CONTACT',
    subtitle1: language === 'pt' 
      ? 'Gostou do meu trabalho?' 
      : 'Did you like my work?',
    subtitle2: language === 'pt'
      ? 'Entre em contato ou acompanhe as minhas redes sociais'
      : 'Get in touch or follow my social media',
    resume: language === 'pt' ? 'Currículo PDF' : 'Resume PDF'
  }

  const contacts = [
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/danilo-silveira-da-silva-1978ba237/'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      link: 'https://github.com/Niloinpng'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      link: 'https://wa.me/5561986593970'
    },
    {
        icon: FaPaperclip,
        title: translations.resume,
        link: 'https://drive.google.com/file/d/18_Ga_S-LnsEJlb3FmXEHlU4yGhMFwzCX/view?usp=sharing'
      },
    {
        icon: FaEnvelope,
        title: 'nilo.silveira.silva@gmail.com',
      },
  ]

  return (
    <section className="px-10 py-8 lg:py-24">
      <div className="flex flex-col max-w-4xl mx-auto gap-6">
        <h1 className="font-extrabold text-xl lg:text-3xl text-preto dark:text-branco text-center">
          {translations.title}
        </h1>
        <h3 className="font-spartan text-lg lg:text-3xl text-preto/90 dark:text-branco/90 text-center">
          {translations.subtitle1} <br />
          {translations.subtitle2}
        </h3>
        <div className="flex flex-col gap-6 mt-4">
          {contacts.map((contact, index) => (
            <ContactButton
              key={index}
              icon={contact.icon}
              title={contact.title}
              link={contact.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
