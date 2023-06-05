import React from "react";
import Bullet from "./Bullet";
import {
  Box,
  Text,
  Center,
  VStack,
  extendTheme,
  HStack,
  Divider,
} from "@chakra-ui/react";

export default function Component2022() {
  return (
    <VStack>
      <Text paddingTop="100px" fontWeight={600} fontSize="40px">
        2021-2022
      </Text>
      <Box>
        <Center>
          <Bullet pos={1500} margin={-1000} />
          <Box
            fontSize="30px"
            top="1210"
            paddingRight="175px"
            position="absolute"
          >
            <HStack>
              <Box paddingTop="10px" color="bronze.100">
                <ion-icon name="trophy"></ion-icon>
              </Box>
              <Box>States</Box>
            </HStack>
            <Text
              fontWeight="200"
              paddingRight="5px"
              textAlign="left"
              fontSize="18px"
            >
              March 17-18, 2023
            </Text>
            <Text fontWeight="300" fontSize="20px">
              {" "}
              3rd Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
    </VStack>
  );
}
