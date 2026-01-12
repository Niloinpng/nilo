import { FaArrowDown, FaArrowUp } from 'react-icons/fa'


function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-preto w-full py-2 lg:py-4 flex items-center justify-center">
      <button
        onClick={scrollToTop}
        className="group flex flex-row items-center text-branco hover:text-branco/80 transition-colors"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
            <FaArrowDown 
              className="absolute transition-all duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-full group-hover:opacity-0" 
              size={15}
            />
            <FaArrowUp 
              className="absolute transition-all duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100" 
              size={15}
            />
          </div>
        ))}
      </button>
    </footer>
  )
}

export default Footer
