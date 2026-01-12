import type { ReactNode } from 'react'

interface TituloProps {
  titulo: string
  subtitulo?: string | ReactNode
}

function Titulo({ titulo, subtitulo }: TituloProps) {
  return (
    <div className="flex flex-col">
      {/* Título */}
      <h2 className="font-spartan font-extrabold text-xl lg:text-3xl text-preto dark:text-branco text-center">
        {titulo}
      </h2>
      
      {/* Subtítulo - só aparece se fornecido */}
      {subtitulo && (
        <p className={`text-sm lg:text-2xl text-preto/80 dark:text-branco/80 font-thin text-center ${typeof subtitulo === 'string' ? 'whitespace-pre-line' : ''}`}>
          {subtitulo}
        </p>
      )}
    </div>
  )
}

export default Titulo
