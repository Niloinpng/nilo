import { SiReact, SiCss3, SiTypescript } from 'react-icons/si'
import SkillItem from '../../components/SkillItem'
import Carousel from '../../components/Carousel'
import adm1 from '../../assets/images/AdminSebrae/1.png'
import adm2 from '../../assets/images/AdminSebrae/2.png'
import adm3 from '../../assets/images/AdminSebrae/3.png'
import adm4 from '../../assets/images/AdminSebrae/4.png'

function ADM() {
  const images = [adm1, adm2, adm3,adm4]

  return (
    <section className="px-4 lg:px-12 py-2 lg:py-6">
      <div className="flex flex-col max-w-6xl mx-auto gap-2">
        {/* Título */}
        <h2 className="font-spartan font-extrabold text-2xl lg:text-6xl text-preto dark:text-branco text-center">
          GESTOR DO APP SEBRAE
        </h2>

        {/* Texto de apoio */}
        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-3xl mx-auto">
        Plataforma de controle e personalização de acessos para o aplicativo Sebrae na palma da sua mão. Minha principal contribuição foi o desenvolvimento da área de relatórios e dashboards, garantindo que o gestor tenha uma visão clara dos dados.
        </p>

        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-4xl mx-auto">
        <span className="font-bold">Destaques:</span> Implementação de layouts a partir do Figma, desenvolvimento orientado a Histórias de Usuário (HU) e rotina em Sprints. Integração de APIs REST utilizando Axios.
        </p>
        {/* SkillItems - React e CSS*/}
        <div className="flex flex-wrap justify-center gap-1 lg:gap-2 py-2 lg:py-4">
          <SkillItem icon={SiTypescript} name="TypeScript"/>
          <SkillItem icon={SiReact} name="React" />
          <SkillItem icon={SiCss3} name="CSS" />
        </div>

        {/* Carousel com as imagens */}
        <div className="w-full max-w-220 mx-auto">

          <Carousel 
            images={images}
            alt="Gestor do App Sebrae"
          />

          <p className='text-xs text-preto/80 dark:text-branco/80 text-end max-w-4xl mx-auto pt-2'>
            *Qualquer dado apresentado nas imagens é fictício, são dados mockados.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default ADM
