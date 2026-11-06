import { SiReact, SiCss3, SiTypescript } from 'react-icons/si'
import type { IconType } from 'react-icons'
import { TbArrowUpRight } from 'react-icons/tb'
import SkillItem from '../../components/SkillItem'
import Carousel from '../../components/Carousel'
import sebrae2 from '../../assets/images/Sebrae/Sebrae2.png'
import sebrae3 from '../../assets/images/Sebrae/Sebrae3.png'
import sebraeVideo from '../../assets/videos/Sebrae1.mp4'

const CursorIcon: IconType = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
  </svg>
)

function Sebrae() {
  const images = [sebrae2, sebrae3]

  return (
    <section className="px-10 py-15">
      <div className="flex flex-col max-w-6xl mx-auto gap-2">
        <h2 className="font-spartan font-extrabold text-2xl lg:text-6xl text-preto dark:text-branco text-center">
          SUPERAPP SEBRAE
        </h2>

        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-4xl mx-auto">
          Atuei como desenvolvedor mobile no Sebrae na palma da sua mão, junto com a equipe. É um aplicativo grande, que reúne em um só lugar várias ferramentas de apoio ao pequeno negócio.
          <br />
          <a href="https://apps.apple.com/br/app/sebrae-apoio-para-seu-neg%C3%B3cio/id1482839375" target="_blank" rel="noopener noreferrer" className="font-bold inline-flex items-center gap-1"> App Store <TbArrowUpRight className="inline" /></a>
          <a href="https://play.google.com/store/apps/details?id=br.com.sebrae.napalmadamao&hl=pt_BR&pli=1" target="_blank" rel="noopener noreferrer" className="font-bold inline-flex items-center gap-1"> Google Play <TbArrowUpRight className="inline" /></a>
        </p>

        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-3xl mx-auto">
          Desenvolvi a splash screen, a animação de entrada e a ferramenta Planejadora. Também apoiei a equipe de dados, implementando o tagueamento do aplicativo.
        </p>

        <div className="flex flex-wrap justify-center gap-1 lg:gap-2 py-2 lg:py-4">
          <SkillItem icon={SiReact} name="React" />
          <SkillItem icon={SiTypescript} name="TypeScript" />
          <SkillItem icon={SiCss3} name="CSS" />
          <SkillItem icon={CursorIcon} name="Cursor" />
        </div>

        <div className="w-full max-w-220 mx-auto">
          <Carousel
            images={images}
            video={sebraeVideo}
            alt="SuperApp Sebrae"
          />
        </div>
      </div>
    </section>
  )
}

export default Sebrae
