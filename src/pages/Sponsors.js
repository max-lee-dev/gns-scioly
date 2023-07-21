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
import scioly2 from "./components/images/scioly3.png";

import Contact from "./Contact";

export default function Sponsors() {
  return (
    <Box className="font image" color="black">
      <VStack>
        <Center>
          <Box paddingTop="0px" minH="0vh" width="100%">
            <Stack spacing={0} direction={["column", "column", "row"]}>
              <Box bg="brand.100" width="100%">
                <img src={scioly1} alt="scioly1" />
              </Box>

              <Box bg="brand.900" width="120%">
                <Box margin={3}>
                  <Text
                    textAlign="center"
                    fontWeight={600}
                    color="white"
                    fontSize="36px"
                  >
                    Sponsor us
                  </Text>
                  <Center>
                    <VStack>
                      <Text
                        textAlign="center"
                        color="white"
                        paddingTop="20px"
                        width="80%"
                        fontSize="20px"
                      >
                        {" "}
                        GNSSO is dedicated to advancing STEM education and
                        fostering passion in our school and community, creating
                        an environment where students can pursue their
                        interests. As a student-run club, extensive funding is
                        required for competitions, builds, and equipment.
                        Through the help of sponsors, we can effectively address
                        financial barriers to create a more effective team.
                      </Text>
                      <Button
                        as="a"
                        href="/contact"
                        width="100px"
                        height="34px"
                      >
                        Contact us
                      </Button>
                    </VStack>
                  </Center>
                </Box>
              </Box>
              <Box bg="brand.100" width="100%">
                <img src={scioly2} alt="scioly2" />
              </Box>
            </Stack>
          </Box>
        </Center>
      </VStack>
      <Contact />
    </Box>
  );
}
