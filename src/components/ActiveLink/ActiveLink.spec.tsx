import { render } from '@testing-library/react';
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
    const { getByText } = render(
      <ActiveLink href="/">
        <a>Home</a>
      </ActiveLink>
    );
  
    expect(getByText('Home')).toBeInTheDocument();
  });
  
  it('should receiving aria-current as page', () => {
    const { getByText } = render(
      <ActiveLink href="/">
        <a>Home</a>
      </ActiveLink>
    );
  
    expect(getByText('Home')).toHaveAttribute('aria-current', 'page');
  });
});
