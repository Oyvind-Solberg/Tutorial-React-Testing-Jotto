import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
	const [currentGuess, setCurrentGuess] = React.useState('');
	return (
		<div data-test="component-input" className="container">
			<form className="form-inline">
				<input
					data-test="input-box"
					className="mb-2 mx-sm-3"
					type="text"
					placeholder="enter guess"
					value={currentGuess}
					onChange={(event) => {
						setCurrentGuess(event.target.value);
					}}
				/>
				<button
					data-test="submit-button"
					className="btn btn-primary mb-2"
					onClick={(event) => {
						event.preventDefault();
						// TODO: Update guessedWords context
						// TODO: Check against secretWord and optionaly update sucess context
						setCurrentGuess('');
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

Input.propTypes = {
	secretWord: PropTypes.string.isRequired,
};

export default Input;
