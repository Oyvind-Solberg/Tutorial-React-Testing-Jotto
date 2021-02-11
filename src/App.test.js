import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

/**
 * Factory function to create a ReactWrapper for the App component.
 * @function setup
 * @returns {ReactWrapper}
 */

const setup = (props = {}) => {
	mockGetSecretWord.mockClear();
	hookActions.getSecretWord = mockGetSecretWord;

	return mount(<App />);
};

test('App renders without error', () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, 'component-app');
	expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {
	test('getSecretWord gets called on App mount', () => {
		setup();

		// check to see if secret word was updated
		expect(mockGetSecretWord).toHaveBeenCalled();
	});
});
