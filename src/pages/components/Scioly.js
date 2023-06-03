import React, { forwardRef } from "react";
import { Box, Text } from "@chakra-ui/react";
function Scioly({ text }, ref) {
  return (
    <div ref={ref}>
      <Box ref={ref} paddingLeft="20px">
        <Box color="black" paddingTop="24px">
          <Text fontSize="40px">What is Science Olympiad?</Text>
          <Box>
            <Text paddingRight="5px" paddingTop="10px" fontSize="20px">
              Science Olympiad is a team-based competition where students
              demonstrate their understanding of STEM (Science, Technology,
              Engineering, and Math) topics. Students challenge themselves in 23
              events pertaining to various fields such as genetics, earth
              science, chemistry, anatomy, physics, geology, mechanical
              engineering, and technology. By combing events from all
              disciplines, Science Olympiad hopes to increase student and
              teacher interest and participation in science.
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default forwardRef(Scioly);
