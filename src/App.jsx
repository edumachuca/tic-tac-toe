import { Box, Flex, List } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Board } from './components/Board';

export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];

	function handlePlay(nextSquares) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	function jumpTo(nextMove) {
		setCurrentMove(nextMove);
	}

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = 'Ir al movimiento #' + move;
		} else {
			description = 'Ir al inicio del juego';
		}
		return (
			<List key={move}>
				<Box color="blue" w="25vh" cursor="pointer" onClick={() => jumpTo(move)}>
					{description}
				</Box>
			</List>
		);
	});

	return (
		<Flex backgroundColor="lightblue">
			<Flex>
				<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			</Flex>
			<Flex>
				<List>{moves}</List>
			</Flex>
		</Flex>
	);
}
