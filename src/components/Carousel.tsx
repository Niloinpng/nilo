import { useState, useEffect, useRef } from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

interface CarouselProps {
  images: string[]
  alt?: string
}

function Carousel({ images, alt = 'Imagem do carrossel' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)

  // Avançar para próxima imagem
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  // Voltar para imagem anterior
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Ir para imagem específica
  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  // Mudança automática a cada 3 segundos
  useEffect(() => {
    if (images.length <= 1) return

    // Limpar timer anterior
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
    }

    // Criar novo timer
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex, images.length])

  if (images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full flex flex-col items-center group">
      {/* Container wrapper para setas e imagem */}
      <div className="relative w-full flex items-center">
        {/* Botão de navegação esquerda */}
        {images.length > 1 && (
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 text-preto dark:text-branco hover:text-preto/70 dark:hover:text-branco/70 transition-colors"
            aria-label="Imagem anterior"
          >
            <TbChevronLeft className="text-3xl lg:text-4xl" />
          </button>
        )}

        {/* Container da imagem com proporção 16:9 (1920x1080) */}
        <div className="relative w-full aspect-[16/9] rounded-lg">
          {/* Container interno para a imagem com overflow */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${alt} ${index + 1}`}
                className={`absolute inset-0 w-full h-full rounded-lg object-contain transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Indicadores */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50 flex gap-2 px-3 py-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`transition-all rounded-full ${
                    index === currentIndex
                      ? 'bg-preto dark:bg-branco w-8 h-2 shadow-lg'
                      : 'bg-preto/60 dark:bg-branco/60 w-2 h-2 hover:bg-preto/80 dark:hover:bg-branco/80'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Botão de navegação */}
        {images.length > 1 && (
          <button
            onClick={goToNext}
            className="flex-shrink-0 text-preto dark:text-branco hover:text-preto/70 dark:hover:text-branco/70 transition-colors"
            aria-label="Próxima imagem"
          >
            <TbChevronRight className="text-xl lg:text-4xl" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Carousel
