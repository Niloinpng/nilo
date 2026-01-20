import { useLanguage } from '../contexts/LanguageContext'

function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`text-xs lg:text-sm transition-colors ${
          language === 'pt'
            ? 'font-bold text-preto dark:text-branco'
            : 'font-normal text-preto/60 dark:text-branco/60 hover:text-preto dark:hover:text-branco'
        }`}
      >
        PT
      </button>
      <span className="text-preto/40 dark:text-branco/40">|</span>
      <button
        onClick={() => setLanguage('eng')}
        className={`text-xs lg:text-sm transition-colors ${
          language === 'eng'
            ? 'font-bold text-preto dark:text-branco'
            : 'font-normal text-preto/60 dark:text-branco/60 hover:text-preto dark:hover:text-branco'
        }`}
      >
        ENG
      </button>
    </div>
  )
}

export default LanguageToggle
