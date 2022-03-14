import { ArrowLight } from "../../svgs/icon-arrow-light";
import Button from "../Button";
import './styles.scss'

export default function Navbar() {
  const listElement = useRef<HTMLUListElement | null>(null)

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
          <ul className="list">
            <li>
              <a href="">Product <ArrowLight /></a>
            </li>
            <li>
              <a href="">Company <ArrowLight /></a>
            </li>
            <li>
              <a href="">Connect <ArrowLight /></a>
            </li>
          </ul>
        </div>
        <div className="buttons_wrapper">
          <a href="#">Login</a>
          <Button text="Sign Up" primary/>
        </div>
      </nav>
    </header>
  )
}
