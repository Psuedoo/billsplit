import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import IncomeTile from "./IncomeTile";
import React from "react";


export default function People() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const people = {}

    return (
        <Box>
            <HStack justify="center">
                <Heading>People</Heading>
                <Button onClick={onOpen}>Add</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add Person</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl id="person">
                                <FormLabel>Name</FormLabel>
                                <Input type="text" />
                                <FormLabel>Income</FormLabel>
                                <Input />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button mr={3} onClick={onClose}>
                                Save
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </HStack>
            <HStack spacing={8} justify="center">
                <IncomeTile name="Person 1" income="1800"/>
                <IncomeTile name="Person 2" income="2500"/>
            </HStack>
        </Box>
    )
}