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
            <img src={burger ? 'assets/icon-close.svg' : 'assets/icon-hamburger.svg'} alt="hamburger image" />
          </div>

          <div className="action_buttons">
            <a href="#">Login</a>
            <button className="sign_up_button">Sign Up</button>
          </div>
        </div>

        <ul className="sidebar_list" ref={listRef!}>
          <li className="select" onClick={e => showOptions(e)}>
            <span>Product <ArrowDark /></span>
          </li>
          <div className="options_container">
            <p>Contact</p>
            <p>Newsletter</p>
            <p>LinkedIn</p>
          </div>
          <li className="select" onClick={e => showOptions(e)}>
            <span>Company <ArrowDark /></span>
          </li>
          <div className="options_container">
            <p>Contact</p>
            <p>Newsletter</p>
            <p>LinkedIn</p>
          </div>
          <li className="select" onClick={e => showOptions(e)}>
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
