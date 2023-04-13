import React from 'react';
import PropTypes from 'prop-types';
import { Flex, SimpleGrid } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { calculateWinner } from '../utils/calculateWinner';

export function Board({ xIsNext, squares, onPlay }) {
	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}

		onPlay(nextSquares);
	}

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = 'Ganador: ' + winner;
	} else {
		status = 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');
	}
	return (
		<Flex justifyContent="center" alignItems="center">
			<Flex justifyContent="center" alignItems="center" w="20vh" h="10vh" color="gray.300">
				{status}
			</Flex>
			<SimpleGrid columns={3} width="245px" spacing={1}>
				<Center onClick={() => handleClick(0)} bg="gray.300" width="80px" height="80px" cursor="pointer">
					{squares[0]}
				</Center>
				<Center onClick={() => handleClick(1)} bg="gray.300" width="80px" height="80px" cursor="pointer">
					{squares[1]}
				</Center>
				<Center onClick={() => handleClick(2)} bg="gray.300" width="80px" height="80px" cursor="pointer">
					{squares[2]}
				</Center>
				<Center onClick={() => handleClick(3)} bg="gray.300" width="80px" height="80px" cursor="pointer">
					{squares[3]}
				</Center>
				<Center onClick={() => handleClick(4)} bg="gray.300" width="80px" height="80px" cursor="pointer">
					{squares[4]}
				</Center>
				<Center onClick={() => handleClick(5)} bg="gray.300" width="80px" height="80px" cursor="pointer">
					{squares[5]}
				</Center>
				<Center onClick={() => handleClick(6)} bg="gray.300" width="80px" height="80px" cursor="pointer">
					{squares[6]}
				</Center>
				<Center onClick={() => handleClick(7)} bg="gray.300" width="80px" height="80px" cursor="pointer">
					{squares[7]}
				</Center>
				<Center onClick={() => handleClick(8)} bg="gray.300" width="80px" height="80px" cursor="pointer">
					{squares[8]}
				</Center>
			</SimpleGrid>
		</Flex>
	);
}
Board.propTypes = {
	xIsNext: PropTypes.bool,
	squares: PropTypes.array,
	onPlay: PropTypes.func
};
