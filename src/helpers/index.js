/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word. Can't contain duplicate letters.
 * @returns {number} - Number of letters matched between guessed word an secret word.
 */

export function getLetterMatchCount(guessedWord, secretWord) {
	const secretLetterSet = new Set(secretWord.split(''));
	const guessedLetterSet = new Set(guessedWord.split(''));

	return [...secretLetterSet].filter((letter) => guessedLetterSet.has(letter))
		.length;
}
