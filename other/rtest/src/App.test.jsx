// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// TOP lesson tests
describe('App component', () => {
    it('renders correct heading', () => {
        render(<App />);
        expect(screen.getByRole('heading').textContent).toMatch(
            /our first test/i,
        );
    });
});

// test React Testing Library setup
// describe('App', () => {
//     it('renders headline', () => {
//         render(<App title="React" />);

//         screen.debug();

//         // check if App components renders headline
//     });
// });

// first unit test of vitest install
// describe('something truthy and falsy', () => {
//     it('true to be true', () => {
//         expect(true).toBe(true);
//     });

//     it('false to be false', () => {
//         expect(false).toBe(false);
//     });
// });
