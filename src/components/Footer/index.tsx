import './styles.scss';

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <img src="assets/logo.svg" alt="logo writed Blogr" width="80" height="31" aria-hidden="true"/>
        <div className="list_group">
          <div className="list_wrapper">
            <p className="list_title">Product</p>
            <ul className="footer_list">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>
          
          <div className="list_wrapper">
            <p className="list_title">Company</p>
            <ul className="footer_list">
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="list_wrapper">
            <p className="list_title">Connect</p>
            <ul className="footer_list">
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
      <p id="developer_info">Challenge by <a 
        href="https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP" 
        target="_blank" 
        rel="noopener noreferrer"
        ><strong>FrontEnd Mentor</strong></a> -  Developed by <a href="https://github.com/DanteBenicio" target="_blank" rel="noopener noreferrer"><strong>Dante Benicio ❤️</strong></a></p>
    </footer>
  )
}
