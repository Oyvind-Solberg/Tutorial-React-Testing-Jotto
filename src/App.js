import React from 'react';

import hookActions from './actions/hookActions';

import Input from './Input';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

import './App.css';

/**
 * Reducer to update state, called automatically by dispatch
 * @param {object} state - existing state
 * @param {object} action - contains 'type' and 'payload' properties for the state update
 *                          for example: {type: 'setSecretWord', payload: 'party'}
 * @return {object} - new state
 */

function reducer(state, action) {
	switch (action.type) {
		case 'setSecretWord':
			return { ...state, secretWord: action.payload };
		default:
			throw new Error(`Invalid action type: ${action.type}`);
	}
}

function App() {
	const [state, dispatch] = React.useReducer(reducer, {
		secretWord: null,
	});

	const setSecretWord = (secretWord) =>
		dispatch({ type: 'setSecretWord', payload: secretWord });

	React.useEffect(() => {
		hookActions.getSecretWord(setSecretWord);
	}, []);

	if (!state.secretWord) {
		return (
			<div className="container" data-test="spinner">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				<p>Loading secret word</p>
			</div>
		);
	}

	return (
		<div data-test="component-app" className="container">
			<Input secretWord={state.secretWord} />
			{/* <h1>Jotto</h1>
			<Congrats success={true} />
			<GuessedWords
				guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
			/> */}
		</div>
	);
}

export default App;
