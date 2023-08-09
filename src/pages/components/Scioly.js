import React, { forwardRef } from "react";
import { Box, Text } from "@chakra-ui/react";
function Scioly({ text }, ref) {
  return (
    <div ref={ref}>
      <Box ref={ref} paddingLeft="20px">
        <Box color="black" paddingTop="24px">
          <Text fontSize="40px">What is Science Olympiad?</Text>
          <Box>
            <Text paddingRight="5px" paddingTop="10px" fontSize="26px">
              Science Olympiad is a non-profit organization which hosts
              team-based competitions where students demonstrate their
              understanding of STEM (Science, Technology, Engineering, and Math)
              topics. Teams from thousands of schools across the US compete in
              23 engaging events pertaining to fields such as earth science,
              chemistry, anatomy, optics, and different disciplines of
              engineering—with teammates working together to advance their
              individual skill sets. Through Science Olympiad, students,
              parents, teachers, and businesses are able to work toward the
              shared goal of increasing interest and involvement in science.
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default forwardRef(Scioly);
