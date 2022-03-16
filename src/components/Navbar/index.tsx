import { MouseEvent, useRef, useState } from "react";
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
          <img src="assets/logo.svg" alt="logo writed blogr" />
          <ul ref={listElement} className="list">
            <li onClick={e => showOptions(e)}>
              <a href="#">Product <ArrowLight /></a>
              <div className="options_container">
                <p className="option">Contact</p>
                <p className="option">Newsletter</p>
                <p className="option">LinkedIn</p>
              </div>
            </li>
            <li onClick={e => showOptions(e)}>
              <a href="#">Company <ArrowLight /></a>
              <div className="options_container">
                <p className="option">Contact</p>
                <p className="option">Newsletter</p>
                <p className="option">LinkedIn</p>
              </div>
            </li>
            <li onClick={e => showOptions(e)}>
              <a href="#">Connect <ArrowLight /></a>
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
          <img src={burger ? 'assets/icon-close.svg' : 'assets/icon-hamburger.svg'} alt="hamburger image" />
        </div>
      </nav>
    </header>
  )
}
