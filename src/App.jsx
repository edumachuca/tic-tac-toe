import { Card, CardBody, Flex, Heading, List, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Board } from './components/Board';
import { WinnerModal } from './components/WinnerModal.jsx';
import { calculateWinner } from './utils/calculateWinner';

export default function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];
	const { isOpen, onOpen, onClose } = useDisclosure();

	const winner = calculateWinner(currentSquares);

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
			description = 'Go to move #' + move;
		} else {
			description = 'Go to game start';
		}
		return (
			<Card margin="40px" key={move} mt={3} cursor="pointer" onClick={() => jumpTo(move)}>
				<CardBody p={2}>
					<Text>{description}</Text>
				</CardBody>
			</Card>
		);
	});
	useEffect(() => {
		if (winner !== null) onOpen();
	}, [winner]);
	return (
		<VStack h="100vh" alignItems="center" bg="gray.800">
			<WinnerModal
				isOpen={isOpen}
				winner={winner}
				onClose={onClose}
				onClick={() => {
					setHistory([Array(9).fill(null)]);
					setCurrentMove(0);
					onClose();
				}}
			/>
			<Heading my={4} color="gray.200">
				Tic Tac Toe
			</Heading>
			<Flex h="full" justifyContent="center" bg="gray.800">
				<Flex alignItems="center">
					<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
				</Flex>
				<Flex>
					<List my={10} ml={10}>
						{moves}
					</List>
				</Flex>
			</Flex>
		</VStack>
	);
}
