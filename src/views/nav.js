import Logo from '../assets/logo.svg';
import './style/nav.css';

const nav = [
  {
    title:'about me'
  },
  {
    title:'skill'
  },
  {
    title:'portofolio'
  },
  {
    title:'contact me'
  }
]

const Nav = () =>{
    return (
      <nav className="nav">
        <img
        src={Logo}
        className="nav-logo"
        />
        <ul>
        { nav.map((content, index) => 
          <li key={index}>
            <a>
              {content.title}
            </a>
          </li>
          )
        }
        </ul>
      </nav>
    )
}

export default Nav;