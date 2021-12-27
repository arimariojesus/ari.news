import { render, screen } from '@testing-library/react';
import { ActiveLink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      };
    }
  };
});

describe('<ActiveLink />', () => {
  it('renders correctly', () => {
    render(
      <ActiveLink href="/">
        <a>Home</a>
      </ActiveLink>
    );
  
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  
  it('should receiving aria-current as page', () => {
    render(
      <ActiveLink href="/">
        <a>Home</a>
      </ActiveLink>
    );
  
    expect(screen.getByText('Home')).toHaveAttribute('aria-current', 'page');
  });
});
