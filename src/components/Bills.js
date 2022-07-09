import { Box, Heading, HStack } from "@chakra-ui/react";
import IncomeTile from "./IncomeTile";
import React from "react";

export default function Bills() {
    return (
        <Box>
            <Heading>Bills</Heading>
            <HStack spacing={8} justify="center">
                <IncomeTile name="Rent" income="1750"/>
                <IncomeTile name="Power" income="1100"/>
            </HStack>
        </Box>
    )
}