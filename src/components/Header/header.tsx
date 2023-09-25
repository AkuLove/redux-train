import { BiLogoRedux } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import style from './header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link to="/">
            <BiLogoRedux />
          </Link>
        </div>
        <div className={style.nav}>
          <Link to="/catalog">Catalog</Link>
          <Link to="/friends">Friends</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
