import React from "react";
import {
  Box,
  Stack,
  Button,
  HStack,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react";

import scioly1 from "./components/images/scioly1.jpg";
import scioly2 from "./components/images/scioly2.jpg";

export default function Sponsors() {
  return (
    <Box className="font image" color="black">
      <Center>
        <Box paddingTop="100px" minH="110vh" width="100%">
          <Stack spacing={0} direction={["column", "column", "row"]}>
            <img src={scioly1} alt="scioly1" width="100px" />

            <Box bg="brand.100" width="80%">
              <Text
                textAlign="center"
                fontWeight={600}
                color="white"
                fontSize="40px"
              >
                Sponsor us
              </Text>
              <Text textAlign="center" color="white" fontSize="24px">
                {" "}
                GNSSO is dedicated to advancing STEM education and fostering
                passion in our school and community, creating an environment
                where students can pursue their interests. As a student-run
                club, extensive funding is required for competitions, builds,
                and equipment. Through the help of sponsors, we can effectively
                address financial barriers to create a more effective team.
              </Text>
            </Box>
            <img src={scioly2} alt="scioly2" width="500" />
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}
