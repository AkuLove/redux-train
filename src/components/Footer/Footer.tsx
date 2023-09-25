import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import style from './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.footerBody}>Footer</div>
        <Link to="https://github.com/AkuLove" className={style.logo}>
          <AiFillGithub />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
