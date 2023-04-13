import React from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text
} from '@chakra-ui/react';

export function WinnerModal({ winner, isOpen, onClose, onClick }) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalBody textAlign="center" mt={4}>
					<Text fontSize="xl"> The winner is {winner}</Text>
				</ModalBody>

				<ModalFooter>
					<Button w="full" colorScheme="blue" mr={3} onClick={onClick}>
						Start again
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

WinnerModal.propTypes = {
	winner: PropTypes.string,
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	onClick: PropTypes.func
};
