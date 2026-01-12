import { SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import SkillItem from '../../components/SkillItem'
import tem1 from '../../assets/images/Template/1.png'
import tem2 from '../../assets/images/Template/2.png'
import tem3 from '../../assets/images/Template/3.png'
import Carousel from '../../components/Carousel'

function Template() {
  const images = [tem1, tem2, tem3]

  return (
    <section className="px-3 lg:px-12 pt-2 lg:py-6">
      <div className="flex flex-col max-w-6xl mx-auto gap-2">
        {/* Título */}
        <h2 className="font-spartan font-extrabold text-2xl lg:text-6xl text-preto dark:text-branco text-center">
          TEMPLATE
        </h2>

        {/* Texto de apoio */}
        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-2xl mx-auto">
        Este projeto nasceu da necessidade de otimizar o fluxo de desenvolvimento dentro da CJR, criando uma base de componentes responsivos e customizáveis para serem utilizados em outros projetos da empresa.
        </p>
        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-4xl mx-auto">
        Liderei o desenvolvimento deste projeto, garantindo que os componentes fossem versáteis e fáceis de integrar. Utilizamos o Storybook para documentar visualmente cada componente e suas funcionalidades.
        </p>

        {/* SkillItems - React e CSS*/}
        <div className="flex flex-wrap justify-center gap-1 lg:gap-2 py-2 lg:py-4">
            <SkillItem icon={SiTailwindcss} name="Tailwind CSS" />
            <SkillItem icon={SiReact} name="React" />
            <SkillItem icon={SiTypescript} name="TypeScript"/>
        </div>

        {/* Carousel com as imagens */}
        <div className="w-full max-w-220 mx-auto">
          <Carousel 
            images={images}
            alt="Gestor do App Sebrae"
          />
        </div>

      </div>
    </section>
  )
}

export default Template
