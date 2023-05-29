import React, { forwardRef } from "react";
import { Box, Text } from "@chakra-ui/react";
function Scioly({ text }, ref) {
  return (
    <div ref={ref}>
      <Box ref={ref} minH="70vh" paddingLeft="20px">
        <Box color="black" paddingTop="24px">
          <Text fontSize="34px">What is Science Olympiad?</Text>
        </Box>
      </Box>
    </div>
  );
}

export default forwardRef(Scioly);
