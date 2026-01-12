import { SiReact, SiCss3, SiTypescript, SiExpo } from 'react-icons/si'
import { RiFirebaseFill } from "react-icons/ri";
import SkillItem from '../../components/SkillItem'
import { TbArrowUpRight } from 'react-icons/tb'
import meau1 from '../../assets/images/MEAU/1.png'
import meau2 from '../../assets/images/MEAU/2.png'
import meau3 from '../../assets/images/MEAU/3.png'
import Carousel from '../../components/Carousel'

function Meau() {
  const images = [meau1, meau2, meau3]

  return (
    <section className="px-4 lg:px-12 py-2 lg:py-6">
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
            <a href="https://expo.dev/artifacts/eas/4KyCSN8osqByoLG8opebhx.apk" target="_blank" rel="noopener noreferrer" className="font-bold inline-flex items-center gap-1"> APK <TbArrowUpRight className="inline" /></a>
        </p>

        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-3xl mx-auto">
            Neste projeto, atuei de forma Full Stack, sendo responsável desde a implementação da interface até a estruturação do banco de dados. 
            Desenvolvi funcionalidades como o sistema de chat em tempo real, suporte a geolocalização e o envio de notificações via Firebase Cloud Messaging (FCM). 
            O projeto foi construído utilizando Expo. 
        </p>

        {/* SkillItems - React e CSS*/}
        <div className="flex flex-wrap justify-center gap-1 lg:gap-2 py-2 lg:py-4">
          <SkillItem icon={SiReact} name="React Native" />
          <SkillItem icon={SiExpo} name="Expo" />
          <SkillItem icon={RiFirebaseFill} name="FireBase" />
          <SkillItem icon={SiTypescript} name="TypeScript"/>
          <SkillItem icon={SiCss3} name="CSS" />
        </div>

        {/* Carousel com as imagens */}
        <div className="w-full max-w-220 mx-auto">
          <Carousel 
            images={images}
            alt="MEAU"
          />
        </div>

        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-2xl mx-auto pt-2 lg:pt-4">
            Aqui está um video demostrando as funcionalidades implementadas.
        </p>

        {/* Container do vídeo com proporções similares ao Carousel */}
        <div className="relative w-full max-w-205 mx-auto flex flex-col items-center pt-2 lg:pt-4">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/zoPIfLndTCE"
              title="Vídeo demonstrativo do MEAU"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Meau
