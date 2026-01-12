import type { IconType } from 'react-icons'

interface SkillItemProps {
  icon: IconType
  name: string
}

function SkillItem({ icon: Icon, name }: SkillItemProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 mx-2 whitespace-nowrap rounded-lg bg-preto/5 dark:bg-branco/5 transition-colors">

      <span className="text-xs text-preto lg:text-xl dark:text-branco font-medium">
        {name}
      </span>
      <Icon className="text-xs lg:text-xl text-preto dark:text-branco" />
    </div>
  )
}

export default SkillItem
