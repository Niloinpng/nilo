import { SiReact, SiCss3, SiTypescript, SiExpo } from 'react-icons/si'
import { RiFirebaseFill } from "react-icons/ri";
import SkillItem from '../../components/SkillItem'
import Carousel from '../../components/Carousel'
import { TbArrowUpRight } from 'react-icons/tb'

function Meau() {
  return (
    <section className="px-4 lg:px-12 py-2 lg:py-4">
      <div className="flex flex-col max-w-6xl mx-auto gap-2">
        {/* Título */}
        <h2 className="font-spartan font-extrabold text-2xl lg:text-6xl text-preto dark:text-branco text-center">
          MEAU
        </h2>

        {/* Texto de apoio */}
        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-2xl mx-auto">
            Este é um aplicativo mobile criado para facilitar o processo de adoção, conectando pessoas interessadas em adotar animais que precisam de um lar.
            <br />
            <a href="https://github.com/MEAU-UnB-APP/MeauAPP" target="_blank" rel="noopener noreferrer" className="font-bold inline-flex items-center gap-1"> Repositorio do projeto <TbArrowUpRight className="inline" /></a>
        </p>

        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-4xl mx-auto">
            Neste projeto, atuei de forma Full Stack, sendo responsável desde a implementação do design da interface até a estruturação do banco de dados. 
            Desenvolvi funcionalidades como o sistema de chat em tempo real, suporte a geolocalização e o envio de notificações via Firebase Cloud Messaging (FCM). 
            O projeto foi construído utilizando Expo, focando em uma aplicação com ótima usabilidade. 
        </p>

        {/* SkillItems - React e CSS*/}
        <div className="flex flex-wrap justify-center gap-1 lg:gap-2 py-2 lg:py-4">
          <SkillItem icon={SiReact} name="React Native" />
          <SkillItem icon={SiExpo} name="Expo" />
          <SkillItem icon={RiFirebaseFill} name="FireBase" />
          <SkillItem icon={SiTypescript} name="TypeScript"/>
          <SkillItem icon={SiCss3} name="CSS" />
        </div>

        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-2xl mx-auto">
            Aqui está um video demostrando as funcionalidades implementadas.
        </p>

      </div>
    </section>
  )
}

export default Meau
