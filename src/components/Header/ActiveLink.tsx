import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const current = asPath === props.href ? 'page' : 'false';

  return (
    <Link  {...props}>
      {cloneElement(children, {
        'aria-current': current
      })}
    </Link>
  );
}
