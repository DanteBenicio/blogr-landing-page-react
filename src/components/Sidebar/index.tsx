import { ArrowDark } from '../../svgs/icon-arrow-dark';
import Button from '../Button';
import './styles.scss';

type SidebarProps = {
  burger: boolean
  toggleBurgerValue: () => void
}

export default function Sidebar({ burger, toggleBurgerValue }: SidebarProps) {
  return (
    <div className="sidebar_container">
      <div className="sidebar_wrapper">
        <div className="buttons_container">
          <div className={`burger ${burger ? 'active' : ''}`} onClick={toggleBurgerValue}>
            <img src={burger ? 'assets/icon-close.svg' : 'assets/icon-hamburger.svg'} alt="hamburger image" />
          </div>

          <div className="action_buttons">
            <Button text="Login" />
            <Button text="Sign Up" primary/>
          </div>
        </div>

        <ul className="sidebar_list">
          <li className="select">
            <span>Product <ArrowDark /></span>
            {/* <div>
              <p></p>
              <p></p>
              <p></p>
            </div> */}
          </li>
          <li className="select">
            <span>Company <ArrowDark /></span>
          </li>
          <li className="select">
            <span>Connect <ArrowDark /></span>
          </li>
        </ul>
      </div>
    </div>
  )
}
