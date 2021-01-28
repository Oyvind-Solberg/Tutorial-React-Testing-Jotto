import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './Input';

const defaultProps = {
	secretWord: 'party',
};

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @param {object} props - Component props spesific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<Input {...setupProps} />);
};

test('Input renders without error', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'component-input');
	expect(component.length).toBe(1);
});

test('does not throw warning with expected props', () => {
	checkProps(Input, defaultProps);
});

describe('state controlled input field', () => {
	let wrapper;
	let mockSetCurrentGuess = jest.fn();

	beforeEach(() => {
		mockSetCurrentGuess.mockClear();
		React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
		wrapper = setup();
	});

	test('state updates with value of input box upon change', () => {
		const inputBox = findByTestAttr(wrapper, 'input-box');
		const mockEvent = { target: { value: 'train' } };

		inputBox.simulate('change', mockEvent);

		expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
	});

	test('field is cleard upon submit button click', () => {
		const submitButton = findByTestAttr(wrapper, 'submit-button');

		submitButton.simulate('click', { preventDefault() {} });

		expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
	});
});
