import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
	return shallow(<Input />);
};

test('Input renders without error', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'component-input');
	expect(component.length).toBe(1);
});
