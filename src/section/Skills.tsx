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
import { useLanguage } from '../contexts/LanguageContext'

interface Skill {
  namePt: string
  nameEng: string
  icon: IconType
}

interface SkillCategory {
  titlePt: string
  titleEng: string
  skills: Skill[]
}

function Skills() {
  const { language } = useLanguage()

  const categories: SkillCategory[] = [
    {
      titlePt: 'Front-end',
      titleEng: 'Front-end',
      skills: [
        { namePt: 'React.js', nameEng: 'React.js', icon: SiReact },
        { namePt: 'React Native', nameEng: 'React Native', icon: SiReact },
        { namePt: 'Next.js', nameEng: 'Next.js', icon: SiNextdotjs },
        { namePt: 'TypeScript', nameEng: 'TypeScript', icon: SiTypescript },
        { namePt: 'Tailwind CSS', nameEng: 'Tailwind CSS', icon: SiTailwindcss },
        { namePt: 'Figma', nameEng: 'Figma', icon: SiFigma },
        { namePt: 'Expo', nameEng: 'Expo', icon: SiExpo },
      ]
    },
    {
      titlePt: 'Back-end & Dados',
      titleEng: 'Back-end & Data',
      skills: [
        { namePt: 'Node.js', nameEng: 'Node.js', icon: SiNodedotjs },
        { namePt: 'Python', nameEng: 'Python', icon: SiPython },
        { namePt: 'C++', nameEng: 'C++', icon: SiCplusplus },
        { namePt: 'SQL', nameEng: 'SQL', icon: FaDatabase },
        { namePt: 'FireBase', nameEng: 'FireBase', icon: RiFirebaseFill },
        { namePt: 'Prisma', nameEng: 'Prisma', icon: SiPrisma },
        { namePt: 'Pandas', nameEng: 'Pandas', icon: SiPandas },
      ]
    },
    {
      titlePt: 'Ferramentas & Processos',
      titleEng: 'Tools & Processes',
      skills: [
        { namePt: 'Git', nameEng: 'Git', icon: SiGit },
        { namePt: 'Github', nameEng: 'Github', icon: SiGithub },
        { namePt: 'Metodologias Ágeis (Scrum)', nameEng: 'Agile Methodologies (Scrum)', icon: FaProjectDiagram },
        { namePt: 'Automação (Selenium)', nameEng: 'Automation (Selenium)', icon: SiSelenium },
      ]
    }
  ]

  type CarouselItem = 
    | { type: 'title'; name: string }
    | { type: 'skill'; name: string; icon: IconType }
  
  const carouselItems: CarouselItem[] = []
  
  categories.forEach(category => {
    const title = language === 'pt' ? category.titlePt : category.titleEng
    carouselItems.push({ type: 'title', name: title })
    category.skills.forEach(skill => {
      const name = language === 'pt' ? skill.namePt : skill.nameEng
      carouselItems.push({ type: 'skill', name, icon: skill.icon })
    })
  })

  const duplicatedItems = [
    ...carouselItems, 
    ...carouselItems, 
    ...carouselItems, 
    ...carouselItems
  ]

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden py-6">
        <div 
          className="flex items-center lg:gap-8 gap-2"
          style={{
            animation: 'scroll 280s linear infinite',
            width: 'max-content'
          }}
        >
          {duplicatedItems.map((item, index) => {
            if (item.type === 'title') {
              return (
                <div
                  key={index}
                  className="flex items-center whitespace-nowrap"
                >
                  <span className="font-bbh text-2xl lg:text-3xl text-preto dark:text-branco ">
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

