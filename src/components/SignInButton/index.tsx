import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
      type="button"
      tabIndex={0}
      className={styles.signInButton}
    >
      <FaGithub color="#04d361" aria-hidden="true" />
      Arimário Jesus
      <FiX color="#737380" aria-label="Close Icon" />
    </button>
  ) : (
    <button
      type="button"
      tabIndex={0}
      className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}