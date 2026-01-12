import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiFigma,
  SiNodedotjs,
  SiPython,
  SiCplusplus,
  SiPrisma,
  SiGit,
  SiGithub,
  SiSelenium,
  SiPandas,
  SiExpo
} from 'react-icons/si'
import { FaDatabase, FaProjectDiagram } from 'react-icons/fa'
import { RiFirebaseFill } from "react-icons/ri";
import type { IconType } from 'react-icons'
import SkillItem from '../components/SkillItem'

interface Skill {
  name: string
  icon: IconType
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

function Skills() {
  const categories: SkillCategory[] = [
    {
      title: 'Front-end',
      skills: [
        { name: 'React.js', icon: SiReact },
        { name: 'React Native', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Figma', icon: SiFigma },
        { name: 'Expo', icon: SiExpo },
      ]
    },
    {
      title: 'Back-end & Dados',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Python', icon: SiPython },
        { name: 'C++', icon: SiCplusplus },
        { name: 'SQL', icon: FaDatabase },
        { name: 'FireBase', icon: RiFirebaseFill },
        { name: 'Prisma', icon: SiPrisma },
        { name: 'Pandas', icon: SiPandas },
      ]
    },
    {
      title: 'Ferramentas & Processos',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Github', icon: SiGithub },
        { name: 'Metodologias Ágeis (Scrum)', icon: FaProjectDiagram },
        { name: 'Automação (Selenium)', icon: SiSelenium },
      ]
    }
  ]

  type CarouselItem = 
    | { type: 'title'; name: string }
    | { type: 'skill'; name: string; icon: IconType }
  
  const carouselItems: CarouselItem[] = []
  
  categories.forEach(category => {
    carouselItems.push({ type: 'title', name: category.title })
    category.skills.forEach(skill => {
      carouselItems.push({ type: 'skill', name: skill.name, icon: skill.icon })
    })
  })

  const duplicatedItems = [...carouselItems, ...carouselItems, ...carouselItems, ...carouselItems]

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden py-6 lg:py-8">
        <div 
          className="flex"
          style={{
            animation: 'scroll 30s linear infinite'
          }}
        >
          {duplicatedItems.map((item, index) => {
            if (item.type === 'title') {
              return (
                <div
                  key={index}
                  className="flex items-center lg:py-2 whitespace-nowrap"
                >
                  <span className="font-bbh text-2xl lg:text-4xl text-preto dark:text-branco pl-8">
                    {item.name}:
                  </span>
                </div>
              )
            } else {
              return (
                <SkillItem
                  key={index}
                  icon={item.icon}
                  name={item.name}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills

