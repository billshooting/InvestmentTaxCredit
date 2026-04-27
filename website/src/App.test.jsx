import React from 'react';
import { describe, expect, it } from 'vitest';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

describe('App', () => {
  it('renders the modern bright website content', () => {
    const html = renderToString(<App />);

    expect(html).toContain('Investment Tax Credit');
    expect(html).toContain('Track investment, tax, and credit details with less friction.');
    expect(html).toContain('Investments');
    expect(html).toContain('Tax');
    expect(html).toContain('Credit');
    expect(html).toContain('Azure-hosted .NET Core APIs');
    expect(html).toContain('future mobile clients');
  });
});
