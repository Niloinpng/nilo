import DarkModeToggle from '../components/DarkModeToggle'

function NavBar() {
  return (
    <nav className="text-preto dark:text-branco pb-2 lg:pb-4 px-3 lg:px-12 py-2 lg:py-4">
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Nilo Silveira da Silva</h1>
          </div>
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default NavBar

