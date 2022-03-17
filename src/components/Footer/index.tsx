import './styles.scss';

export default function Footer() {
  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        <img src="assets/logo.svg" alt="logo writed Blogr" width="80" height="31"/>
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
    </footer>
  )
}
