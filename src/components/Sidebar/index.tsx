import { MouseEvent, useRef } from 'react';
import { ArrowDark } from '../../svgs/icon-arrow-dark';
import './styles.scss';

type SidebarProps = {
  burger: boolean
  toggleBurgerValue: () => void
}

export default function Sidebar({ burger, toggleBurgerValue }: SidebarProps) {
  const listRef = useRef<HTMLUListElement | null>(null)

  function showOptions(e: MouseEvent) {
    const list = Array.from(listRef.current?.children!)
    const liClicked = e.currentTarget;

    list.forEach(li => {
      if (li === liClicked) {
        liClicked.classList.toggle('active');
        return
      }

      if (li.classList.contains('active')) {
        li.classList.remove('active')
      }
    })
  }

  return (
    <div className="sidebar_container">
      <div className="sidebar_wrapper">
        <div className="buttons_container">
          <div className={`burger ${burger ? 'active' : ''}`} onClick={toggleBurgerValue}>
            <img 
              src='assets/icon-close.svg' 
              alt="hamburger image" 
              width="26" 
              height="26" 
              tabIndex={1}
              role="menu"
              aria-label="menu close"
            />
          </div>

          <div className="action_buttons">
            <a href="#">Login</a>
            <button 
              className="sign_up_button" 
              aria-label="sign up button"
              role="button"
            >Sign Up</button>
          </div>
        </div>

        <ul className="sidebar_list" ref={listRef!} role="menu" aria-label="menu list">
          <li className="select" onClick={e => showOptions(e)} role="menuitem" tabIndex={2}>
            <span>Product <ArrowDark /></span>
          </li>
          <div className="options_container">
            <p>Contact</p>
            <p>Newsletter</p>
            <p>LinkedIn</p>
          </div>
          <li className="select" onClick={e => showOptions(e)} role="menuitem" tabIndex={3}>
            <span>Company <ArrowDark /></span>
          </li>
          <div className="options_container">
            <p>Contact</p>
            <p>Newsletter</p>
            <p>LinkedIn</p>
          </div>
          <li className="select" onClick={e => showOptions(e)} role="menuitem" tabIndex={4}>
            <span>Connect <ArrowDark /></span>
          </li>
          <div className="options_container">
            <p>Contact</p>
            <p>Newsletter</p>
            <p>LinkedIn</p>
          </div>
        </ul>
      </div>
    </div>
  )
}
