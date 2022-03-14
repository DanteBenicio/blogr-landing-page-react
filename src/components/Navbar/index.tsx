import { ArrowLight } from "../../svgs/icon-arrow-light";
import Button from "../Button";
import './styles.scss'

export default function Navbar() {
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
