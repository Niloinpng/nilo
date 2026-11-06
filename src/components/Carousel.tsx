import { useState, useEffect, useRef } from 'react'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

interface CarouselProps {
  images: string[]
  alt?: string
  video?: string
}

function Carousel({ images, alt = 'Imagem do carrossel', video }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const slideCount = images.length + (video ? 1 : 0)
  const onVideo = Boolean(video) && currentIndex === 0

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slideCount)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (slideCount <= 1 || onVideo) return

    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
    }

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount)
    }, 3000)

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex, onVideo, slideCount])

  useEffect(() => {
    const element = videoRef.current
    if (!element || !onVideo) return
    element.play().catch(() => {})
  }, [onVideo])

  if (slideCount === 0) {
    return null
  }

  const slideLabel = (index: number) => {
    if (video && index === 0) return 'Ir para o vídeo'
    return `Ir para imagem ${video ? index : index + 1}`
  }

  return (
    <div className="relative w-full flex flex-col items-center group">
      <div className="relative w-full flex items-center">
        {slideCount > 1 && (
          <button
            onClick={goToPrevious}
            className="flex-shrink-0 text-preto dark:text-branco hover:text-preto/70 dark:hover:text-branco/70 transition-colors"
            aria-label={video ? 'Slide anterior' : 'Imagem anterior'}
          >
            <TbChevronLeft className="text-3xl lg:text-4xl" />
          </button>
        )}

        <div className="relative w-full aspect-[16/9] rounded-lg">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            {video
              ? !onVideo && images[currentIndex - 1] && (
                  <img
                    src={images[currentIndex - 1]}
                    alt={`${alt} ${currentIndex}`}
                    className="absolute inset-0 w-full h-full rounded-lg object-contain"
                  />
                )
              : images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${alt} ${index + 1}`}
                    className={`absolute inset-0 w-full h-full rounded-lg object-contain transition-opacity duration-500 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
            {video && onVideo && (
              <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                controls
                autoPlay
                preload="auto"
                className="absolute inset-0 z-10 w-full h-full rounded-lg object-contain bg-black/5"
              />
            )}
          </div>

          {slideCount > 1 && (
            <div className={`absolute left-1/2 -translate-x-1/2 z-50 flex gap-2 px-3 py-2 ${onVideo ? 'bottom-14' : 'bottom-2'}`}>
              {Array.from({ length: slideCount }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentIndex
                      ? 'bg-preto dark:bg-branco w-8 h-2 shadow-lg'
                      : 'bg-preto/60 dark:bg-branco/60 w-2 h-2 hover:bg-preto/80 dark:hover:bg-branco/80'
                  }`}
                  aria-label={slideLabel(index)}
                />
              ))}
            </div>
          )}
        </div>

        {slideCount > 1 && (
          <button
            onClick={goToNext}
            className="flex-shrink-0 text-preto dark:text-branco hover:text-preto/70 dark:hover:text-branco/70 transition-colors"
            aria-label={video ? 'Próximo slide' : 'Próxima imagem'}
          >
            <TbChevronRight className="text-xl lg:text-4xl" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Carousel
