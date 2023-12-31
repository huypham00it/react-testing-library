import React from 'react';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import TestAsync from '../components/TestAsync'
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('increments counter after 0.5s', async () => {
    const { getByTestId, getByText } = render(<TestAsync />);

    fireEvent.click(getByTestId('button-up'))

    const counter = await waitForElement(() => getByText('1'))

    expect(counter).toHaveTextContent('1')
});

it('decrease counter', () => {
    const { getByTestId } = render(<TestAsync />);
    fireEvent.click(getByTestId('button-down'))
    expect(getByTestId('counter')).toHaveTextContent('-1')
});