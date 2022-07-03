import styles from './Header.module.scss';
import logo from './img/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>



          <nav className={styles.mainNav}>
            <ul>
              <li>
                {router.pathname !== '/' ?  <Link href="/" >
                  <a className={router.pathname !== '/' ? 'colorWhite' : ""}>Home</a>
                </Link> : null}

              </li>
              <li>
                {router.pathname !== '/works' ?  <Link href="/works"  >
                  <a>Works</a>
                </Link> : null}
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
