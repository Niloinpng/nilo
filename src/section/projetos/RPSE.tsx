import { SiPython } from 'react-icons/si'
import { TbArrowUpRight } from 'react-icons/tb'
import SkillItem from '../../components/SkillItem'

function RPSE() {
  return (
    <section className="px-10 py-15">
      <div className="flex flex-col max-w-6xl mx-auto gap-2">
        <h2 className="font-spartan font-extrabold text-2xl lg:text-6xl text-preto dark:text-branco text-center">
          AUTOMAÇÃO RPSE
        </h2>

        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-4xl mx-auto">
          Durante minha trajetória no Sebrae, precisei cruzar duas bases de dados para comprovar as horas de acesso dos usuários. O batimento era feito manualmente no Excel e levava cerca de 4 dias, além de deixar passar falhas na revisão.
          <br />
          <a href="https://colab.research.google.com/drive/1yBY5QVL73sTl0zzd-i0ebMErRrJVZOOr?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-bold inline-flex items-center gap-1"> Repositorio do projeto <TbArrowUpRight className="inline" /></a>
        </p>

        <p className="text-xs lg:text-lg text-preto/80 dark:text-branco/80 text-center max-w-3xl mx-auto">
          Para resolver isso, construí uma automação em Python que carrega as duas bases, aplica o tratamento necessário, cruza os registros e aponta dados inconsistentes. Com ela, o mesmo processo passou a levar cerca de 2 horas, com bem menos risco de erro humano.
        </p>

        <div className="flex flex-wrap justify-center gap-1 lg:gap-2 pt-2 lg:pt-4">
          <SkillItem icon={SiPython} name="Python" />
        </div>
      </div>
    </section>
  )
}

export default RPSE
