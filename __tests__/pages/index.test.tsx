import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../../pages/index';

describe('Home', () => {
  it('renders a welcome message', () => {
    render(<Home />);

    const welcomeMessage = screen.getByText('Welcome to Science HUB');

    expect(welcomeMessage).toBeVisible();
  });
});
