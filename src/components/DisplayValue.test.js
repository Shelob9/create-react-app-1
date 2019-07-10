//Import React
import React from 'react';
//Import test renderer
import TestRenderer from 'react-test-renderer';
//Import component to test
import {DisplayValue} from './DisplayValue';


test( 'Component renders value', () => {
    const value = 'The Value';
    const testRenderer = TestRenderer.create(<DisplayValue value={value} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('div').props.children).toBe(value);
});


test( 'Component has supplied class name', () => {
    const value = 'The Value';
    const className = 'hi-roy'
    const testRenderer = TestRenderer.create(<DisplayValue value={value} className={className}  />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType('div').props.className).toBe(className);
});

