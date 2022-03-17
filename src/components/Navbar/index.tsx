import { MouseEvent, useRef } from "react";
import { ArrowLight } from "../../svgs/icon-arrow-light";
import Button from "../Button";
import './styles.scss'

type NavbarProps = {
  burger: boolean
  toggleBurgerValue: () => void
}

export default function Navbar({ burger, toggleBurgerValue }: NavbarProps) {
  const listElement = useRef<HTMLUListElement | null>(null);

  function showOptions(e: MouseEvent) {
    const listOfLi = Array.from(listElement.current?.children!)
    const liClicked = e.currentTarget
   
    listOfLi.forEach(li => {      
      if (li === liClicked) {
        liClicked.classList.toggle('active')
        return;
      }

      if (li.classList.contains('active')) {
        li.classList.remove('active')
      }
    })
  }

  return (
    <header className="container_header">
      <nav className="wrapper_header">
        <div className="logo_menu_wrapper">
          <img 
            src="assets/logo.svg" 
            alt="logo writed blogr" 
            width="101" 
            height="40" 
            tabIndex={1} 
            aria-label="logo"
          />
          <ul ref={listElement} className="list" aria-label="menu list" role="menu">
            <li onClick={e => showOptions(e)} role="menuitem" aria-owns="submenu" tabIndex={2}>
              <span>Product <ArrowLight /></span>
              <div className="options_container">
                <p className="option">Contact</p>
                <p className="option">Newsletter</p>
                <p className="option">LinkedIn</p>
              </div>
            </li>
            <li onClick={e => showOptions(e)} role="menuitem" aria-owns="submenu" tabIndex={3}>
              <span>Company <ArrowLight /></span>
              <div className="options_container">
                <p className="option">Contact</p>
                <p className="option">Newsletter</p>
                <p className="option">LinkedIn</p>
              </div>
            </li>
            <li onClick={e => showOptions(e)} role="menuitem" aria-owns="submenu" tabIndex={4}>
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
              tabIndex={5} 
              aria-label="menu button"
              role="menu"
            />
          )}
        </div>
      </nav>
    </header>
  )
}
