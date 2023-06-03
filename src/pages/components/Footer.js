import React from "react";
import { Center, Box, HStack, VStack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box minH="10vh" bg="#204a97" color="#f0f0f0">
      <HStack>
        <Center>
          <Box paddingTop="10px" paddingLeft="50px">
            <Text>Great Neck South High School</Text>
            <Box
              as="a"
              className="underline"
              href="https://www.google.com/maps/place/William+A.+Shine+Great+Neck+South+High+School/@40.7663896,-73.7030862,17z/data=!3m1!4b1!4m6!3m5!1s0x89c289cdde5f7b51:0xa8016a9a5f9360ee!8m2!3d40.7663856!4d-73.7005113!16zL20vMDlfODFf?entry=ttu"
            >
              341 Lakeville Road, Great Neck, NY 11020
            </Box>
          </Box>
        </Center>
      </HStack>
    </Box>
  );
}
