import React from "react";
import { Box, HStack, Text, Center } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      as="nav"
      position="sticky"
      minH="90px"
      fontWeight="400"
      bgColor="#204a97"
      fontSize="20px"
      color="white"
    >
      <HStack justifyContent="space-between">
        <Box paddingTop="10px" paddingLeft="5px">
          <HStack as="a" href="/">
            <img
              width="70"
              src="https://cdn.discordapp.com/attachments/691735762538070096/1112542903932293161/NewGNPSLogo120wide.png"
              alt=""
            />
            <Text
              paddingLeft="5px"
              className="font"
              fontSize="28px"
              fontWeight="900"
            >
              Great Neck South Science Olympiad
            </Text>
          </HStack>
        </Box>

        <Box paddingRight="20px" paddingTop="10px">
          <HStack spacing="5">
            <a href="/about">About</a>
            <a href="/awards">Awards</a>
            <a href="/sponsors">Sponsors</a>
            <a href="/contact">Contact</a>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}
