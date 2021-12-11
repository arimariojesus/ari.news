import Link from 'next/link';

import { SignInButton } from '../SignInButton';
import { ActiveLink } from './ActiveLink';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ari.news" />
        
        <nav>
          <ActiveLink href="/">
            <a aria-current="page">Home</a>
          </ActiveLink>
          <ActiveLink href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}