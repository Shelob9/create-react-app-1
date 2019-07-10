import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render,fireEvent,cleanup} from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it( 'Displays the updated value when value changes', () => {
    const { container,getByTestId } = render(<App  />)
    expect(container.querySelector('.display-value').textContent).toBe('Hi Roy');
    fireEvent.change(getByTestId("the-input"), {
        target: { value: "New Value" }
    });
    expect(container.querySelector('.display-value').textContent).toBe('New Value');
});