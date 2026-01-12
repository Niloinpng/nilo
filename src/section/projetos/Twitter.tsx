import {  SiNodedotjs, SiTypescript, SiPrisma } from 'react-icons/si'
import { TbArrowUpRight } from 'react-icons/tb'
import SkillItem from '../../components/SkillItem'


function Twitter() {
  return (
    <section className="px-3 lg:px-12 py-2 lg:py-6">
      <div className="flex flex-col max-w-6xl mx-auto gap-2">
        {/* Título */}
        <h2 className="font-spartan font-extrabold text-2xl lg:text-6xl text-preto dark:text-branco text-center">
          CJR TWITTER
        </h2>

        {/* Texto de apoio */}
        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-4xl mx-auto">
          Esse foi um projeto desenvolvido para fins de estudo. O site é uma rede social inspirada no X (Twitter), permitindo que os usuários criem postagens e interajam entre si.
          <br />
          <a href="https://github.com/Niloinpng/CJR---Twitter" target="_blank" rel="noopener noreferrer" className="font-bold inline-flex items-center gap-1"> Repositorio do projeto <TbArrowUpRight className="inline" /></a>
        </p>

        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-3xl mx-auto">
          Implementei um banco de dados relacional para gerenciar as informações e garanti a segurança do acesso através de autenticação com JWT. Além disso, fui responsável pela criação de todas as rotas da aplicação, conectando o front-end a uma API funcional.
        </p>

        {/* SkillItems - React e CSS*/}
        <div className="flex flex-wrap justify-center gap-1 lg:gap-2 pt-2 lg:pt-4">
          <SkillItem icon={SiNodedotjs} name="Node.js" />
          <SkillItem icon={SiPrisma} name="Prisma"/>
          <SkillItem icon={SiTypescript} name="TypeScript"/>
        </div>

      </div>
    </section>
  )
}

export default Twitter
