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
                        GNSSO is dedicated to advancing interest and education
                        in STEM throughout our school and community. As a
                        student-run club, extensive funding is required for
                        competitions, builds, and equipment. Through the help of
                        sponsors, we can effectively address financial barriers,
                        which allows us to truly focus on our passions for STEM
                        and become an overall stronger team. Sponsors will also
                        amplify our potential as ambassadors of STEM education,
                        assisting us in funding events to share our enthusiasm
                        and expertise with younger members of the community. If
                        you are interested in supporting us and making a
                        donation, please fill out the form below for more
                        information!
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
