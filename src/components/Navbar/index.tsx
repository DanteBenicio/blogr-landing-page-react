import { useRef } from "react";
import { ArrowLight } from "../../svgs/icon-arrow-light";
import { showSubMenu } from "../../utils/showSubMenu";
import Button from "../Button";
import './styles.scss'

type NavbarProps = {
  burger: boolean
  toggleBurgerValue: () => void
}

export default function Navbar({ burger, toggleBurgerValue }: NavbarProps) {
  const listRef = useRef<HTMLUListElement | null>(null);

  return (
    <header className="container_header">
      <nav className="wrapper_header">
        <div className="logo_menu_wrapper">
          <img 
            src="assets/logo.svg" 
            alt="logo writed blogr" 
            width="101" 
            height="40" 
            aria-label="logo"
          />
          <ul ref={listRef} className="list" aria-label="menu list" role="menu">
            <li 
              onClick={e => showSubMenu(e.currentTarget, listRef.current!)} 
              role="menuitem" 
              tabIndex={0}
            >
              <span>Product <ArrowLight /></span>
              <div className="options_container">
                <p className="option">Contact</p>
                <p className="option">Newsletter</p>
                <p className="option">LinkedIn</p>
              </div>
            </li>
            <li 
              onClick={e => showSubMenu(e.currentTarget, listRef.current!)} 
              role="menuitem" 
              tabIndex={0}
            >
              <span>Company <ArrowLight /></span>
              <div className="options_container">
                <p className="option">Contact</p>
                <p className="option">Newsletter</p>
                <p className="option">LinkedIn</p>
              </div>
            </li>
            <li 
              onClick={e => showSubMenu(e.currentTarget, listRef.current!)} 
              role="menuitem" 
              tabIndex={0}
            >
              <span>Connect <ArrowLight /></span>
              <div className="options_container">
                <p className="option">Contact</p>
                <p className="option">Newsletter</p>
                <p className="option">LinkedIn</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="buttons_wrapper">
          <a href="#">Login</a>
          <Button text="Sign Up" primary/>
        </div>
        <div className={`burger ${burger ? 'active' : ''}`} onClick={toggleBurgerValue}>
          {!burger && (
            <img 
              src='assets/icon-hamburger.svg' 
              alt="hamburger image" 
              width="32" 
              height="18" 
              tabIndex={0} 
              aria-label="menu button"
              role="button"
            />
          )}
        </div>
      </nav>
    </header>
  )
}
