import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { AtomExample } from '../src';

describe('AtomExample', () => {
  it('renders an example component', () => {
    render(
      <AtomExample>
        <>Test example</>
      </AtomExample>,
    );

    const testContent = screen.getByText('Test example');

    expect(testContent).toBeVisible();
  });
});
