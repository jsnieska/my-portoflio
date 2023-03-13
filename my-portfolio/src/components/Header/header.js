import './header.scss';
import { ReactComponent as Burger } from './burger.svg';

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='logo'>
          <p>My Porfolio by Juzoas</p>
        </div>
        <div className='burger'>
          <Burger/>
        </div>
        <nav>
          <p>About Me</p>
          <p>Work Expierence</p>
          <p>Projects</p>
      </nav>
      </div>
    </div>
  );
}

export default Header;
