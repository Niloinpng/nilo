import { useState, useEffect } from 'react'
import type { IconType } from 'react-icons'
import { TbArrowUpRight } from 'react-icons/tb'

interface ContactButtonProps {
  icon: IconType
  title: string
  link?: string
}

function ContactButton({ icon: Icon, title, link }: ContactButtonProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false)
      }, 500) // Esconde após 2 segundos

      return () => clearTimeout(timer)
    }
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(title)
      setCopied(true)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  const baseClasses = "group flex items-center px-6 py-4 rounded-lg transition-colors border bg-preto/5 dark:bg-branco/5 hover:bg-preto/10 dark:hover:bg-branco/10 border-preto/10 dark:border-branco/10 hover:border-preto/20 dark:hover:border-branco/20 w-full"

  // Se não houver link, usa botão para copiar
  if (!link) {
    return (
      <>
        <button
          onClick={handleCopy}
          className={baseClasses}
        >
          {/* Ícone e título alinhados à esquerda */}
          <div className="flex items-center gap-3">
            <Icon className="text-2xl text-preto dark:text-branco" />
            <span className="text-preto dark:text-branco font-bold text-base md:text-lg">
              {title}
            </span>
          </div>
        </button>
        
        {/* Mensagem "Copiado!" */}
        {copied && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-preto text-branco dark:text-preto dark:bg-branco px-6 py-3 rounded-lg shadow-lg animate-fade-in">
            <p className="font-bold text-lg">Copiado!</p>
          </div>
        )}
      </>
    )
  }

  // Se houver link, usa link com seta
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} justify-between`}
    >
      {/* Ícone e título alinhados à esquerda */}
      <div className="flex items-center gap-3">
        <Icon className="text-2xl text-preto dark:text-branco" />
        <span className="text-preto dark:text-branco font-bold text-base md:text-lg">
          {title}
        </span>
      </div>
      
      {/* Seta para cima e direita alinhada à direita - só aparece se houver link */}
      <TbArrowUpRight className="text-2xl text-preto dark:text-branco group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </a>
  )
}

export default ContactButton
