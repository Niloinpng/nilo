import type { IconType } from 'react-icons'

interface ActionButtonProps {
  icon?: IconType
  title: string
  link: string
  azul?: boolean
}

function ActionButton({ icon: Icon, title, link, azul = false }: ActionButtonProps) {
  const baseClasses = `flex items-center ${Icon ? 'lg:gap-3 gap-2' : ''} px-3 lg:px-6 lg:py-3 py-2 rounded-lg transition-colors border`
  
  const normalClasses = "bg-preto/5 dark:bg-branco/5 hover:bg-preto/10 dark:hover:bg-branco/10 border-preto/10 dark:border-branco/10 hover:border-preto/20 dark:hover:border-branco/20"
  const roxoClasses = "bg-azul hover:bg-azul/80 border-azul hover:border-azul/80"
  
  const textClasses = azul
    ? "text-branco font-bold text-sm md:text-lg"
    : "text-preto dark:text-branco font-bold text-sm md:text-lg"
  
  const iconClasses = azul
    ? "lg:text-2xl text-branco"
    : "lg:text-2xl text-preto dark:text-branco"

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${azul ? roxoClasses : normalClasses}`}
    >
      {Icon && <Icon className={iconClasses} />}
      <span className={textClasses}>{title}</span>
    </a>
  )
}

export default ActionButton

