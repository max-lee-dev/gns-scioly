import React, { forwardRef } from "react";
import { Box, Text } from "@chakra-ui/react";
function Scioly({ text }, ref) {
  return (
    <div ref={ref}>
      <Box ref={ref} minH="70vh" paddingLeft="20px">
        <Box color="black" paddingTop="24px">
          <Text fontSize="34px">What is Science Olympiad?</Text>
          <Box>
            <Text paddingRight="5px" paddingTop="10px" fontSize="18px">
              Science Olympiad is a science and technology club where students
              test their skill and knowledge in 23 STEM events in specialties
              such as engineering, coding, technology, cartography, earth
              science, biology, forensics, physics, ornithology, astronomy, and
              environmental science. For example, students prepare engineering
              devices such as the Ping-Pong Parachute. In this event students
              build a rocket that must launch into the air and then return an
              egg back to the ground unbroken (using a student made parachute
              system). Further students compete in academic and lab events, such
              as Crime Busters where teams analyze forensics data and solve a
              crime.
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default forwardRef(Scioly);
