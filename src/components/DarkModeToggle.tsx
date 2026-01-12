import { useState, useEffect } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative w-16 h-8 bg-preto/10 dark:bg-branco/10 rounded-full flex items-center transition-colors duration-300 hover:bg-preto/20 dark:hover:bg-branco/20"
      aria-label="Toggle dark mode"
    >
      <div
        className={`absolute w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 ease-in-out ${
          isDark ? 'translate-x-9' : 'translate-x-0.5'
        }`}
      >
        {isDark ? (
          <FaMoon style={{ color: 'var(--color-azul)' }} className="text-sm" />
        ) : (
          <FaSun style={{ color: 'var(--color-amarelo)' }} className="text-sm" />
        )}
      </div>
      <div className="flex w-full justify-between px-2 pointer-events-none">
        <FaSun 
          style={{ color: 'var(--color-amarelo)' }}
          className={`text-xs transition-opacity duration-300 ${isDark ? 'opacity-0' : 'opacity-100'}`} 
        />
        <FaMoon 
          style={{ color: 'var(--color-azul)' }}
          className={`text-xs transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`} 
        />
      </div>
    </button>
  )
}

export default DarkModeToggle

