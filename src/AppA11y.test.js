const { axe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations)
import React from 'react';
import server from 'react-dom/server';
import App from './App';
import {render,fireEvent,cleanup} from '@testing-library/react';

it('Raises no a11y errors', async () => {
  const html = server.renderToString(
    <App />
  );
  const results = await axe(html)
  expect(results).toHaveNoViolations()
});