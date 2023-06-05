import React from "react";
import {
  Box,
  Text,
  Center,
  VStack,
  extendTheme,
  Divider,
} from "@chakra-ui/react";

export default function Bullet({ pos, margin }) {
  return (
    <Box>
      <Center>
        <Divider
          marginTop={margin}
          marginRight="1px"
          orientation={"vertical"}
          borderWidth={3}
          height={200}
          borderColor="brand.100"
        />
        <Box
          color="black"
          borderWidth="5px"
          top={`${pos}`}
          position="absolute"
          borderColor="brand.100"
          borderRadius="100%"
          width="25px"
          height="25px"
          bg={"brand.100"}
        ></Box>
      </Center>
    </Box>
  );
}
