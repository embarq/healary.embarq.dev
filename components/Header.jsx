import classNames from 'classnames'
import { isMobile } from 'lib/helpers'
import { useEffect, useState } from 'react'

const styles = {
  mainHeader: 'flex justify-between items-center px-8 md:px-0 py-8 md:py-12 sticky md:static top-0 z-10 bg-white',
  mainHeaderNav: 'fixed md:static top-0 left-0 mt-24 md:mt-0 px-3 py-4 w-full md:w-auto md:flex bg-white shadow-lg md:shadow-none',
  mainHeaderNavLink: 'w-full md:w-auto py-3 text-gray-500 text-lg px-5 hover:text-gray-800 hover:underline',
}

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (!isMobile()) {
      setShowMenu(true)
    }
  }, [])

  const toggleShowMenu = () => setShowMenu(!showMenu)

  return (
    <header className={styles.mainHeader}>
      <a href="#" className="text-gray-800 font-bold">Healary</a>
      <button className="md:hidden p-3 bg-transparent" onClick={toggleShowMenu}>
        <img
          src="/img/icon-menu.svg"
          alt="Menu"
          width="24"
          height="24" />
      </button>
      <nav className={classNames(styles.mainHeaderNav, { hidden: !showMenu })}>
        <ul className="flex flex-wrap md:flex-no-wrap">
          <li className={classNames(styles.mainHeaderNavLink, 'text-gray-800')}>
            <a href="#">Home</a>
          </li>
          <li className={styles.mainHeaderNavLink}>
            <a href="#">Find a doctor</a>
          </li>
          <li className={styles.mainHeaderNavLink}>
            <a href="#">Apps</a>
          </li>
          <li className={styles.mainHeaderNavLink}>
            <a href="#">Testimonials</a>
          </li>
          <li className={styles.mainHeaderNavLink}>
            <a href="#">About us</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}