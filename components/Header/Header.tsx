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
          <Link href="/" className={styles.home}>
            <a>
              <Image width={80} height={50} src={logo} />
            </a>
          </Link>
          <nav className={styles.mainNav}>
            <ul>
              <li>
                <Link href="/works">
                  <a className={router.pathname == '/works' ? styles.active : ''}>Works</a>
                </Link>
              </li>

              <li>
                <Link href="/contacts">
                  <a className={router.pathname == '/contacts' ? styles.active : ''}>Contacts</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};
