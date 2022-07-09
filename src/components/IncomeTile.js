import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function IncomeTile(props) {
    return (
        <Box p={5} border="3px solid white" borderRadius={10}>
            <Heading>{props.name}</Heading>
            <Divider />
            <Text>Income: ${props.income}/month</Text>
        </Box>
    )
}