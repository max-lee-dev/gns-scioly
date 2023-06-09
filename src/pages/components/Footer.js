import React from "react";
import { Center, HStack, Box, VStack, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box paddingTop="10px" minH="10vh" bg="#204a97" color="#f0f0f0">
      <Stack
        direction={["column", "column", "row"]}
        justifyContent="space-between"
      >
        <Center>
          <Box paddingLeft={[0, 0, 10]} paddingTop="10px">
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
        <Center>
          <VStack textAlign={"left"}>
            {" "}
            <Text fontWeight={600} width="100%">
              {" "}
              Contact us{" "}
            </Text>
            <HStack>
              <Box fontSize="24px">
                <ion-icon name="mail-outline"></ion-icon>
              </Box>
              <Text paddingBottom="5px" paddingRight={10}>
                {" "}
                greatnecksouthscioly@gmail.com
              </Text>
            </HStack>
            <Text width="100%" paddingRight={10}>
              {" "}
              <HStack>
                <Box fontSize="24px">
                  <ion-icon name="logo-instagram"></ion-icon>
                </Box>
                <Text
                  as="a"
                  href="https://www.instagram.com/gns.scioly/"
                  paddingBottom="5px"
                >
                  gns.scioly
                </Text>
              </HStack>
            </Text>
          </VStack>
        </Center>
      </Stack>
    </Box>
  );
}
