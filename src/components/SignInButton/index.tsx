import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './styles.module.scss';

export function SignInButton() {
  const { data: session, status } = useSession();

  return status === 'authenticated' ? (
    <button
      type="button"
      tabIndex={0}
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#04d361" aria-hidden="true" />
      {session?.user.name}
      <FiX color="#737380" aria-label="Close Icon" />
    </button>
  ) : (
    <button
      type="button"
      tabIndex={0}
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}