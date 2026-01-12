import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import ContactButton from '../components/ContactButton'
import { FaPaperclip } from "react-icons/fa6"
import Titulo from '../components/Titulo'

function Contact() {
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
        title: 'Currículo PDF',
        link: 'https://drive.google.com/file/d/18_Ga_S-LnsEJlb3FmXEHlU4yGhMFwzCX/view?usp=sharing'
      },
    {
        icon: FaEnvelope,
        title: 'nilo.silveira.silva@gmail.com',
      },
  ]

  return (
    <section className="px-3 lg:px-12 py-2 lg:py-4">
      <div className="flex flex-col max-w-4xl mx-auto">
        <Titulo 
          titulo="CONTATO"
          subtitulo={<>Gostou do meu trabalho? <br /> Entre em contato ou acompanhe as minhas redes sociais</>}
        />
        
        {/* Botões de contato */}
        <div className="flex flex-col gap-4 mt-4">
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
