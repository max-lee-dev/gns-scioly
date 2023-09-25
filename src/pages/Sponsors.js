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
          <Box paddingTop="100px" minH="90vh" width="100%">
            <Center>
              <Stack spacing={10} direction={["column", "column", "column", "row"]}>
                <Box marginLeft={15} width={['90%', '90%', '90%', "55%"]}>
                  <Box marginLeft="20px">
                    <Text
                      textAlign="center"
                      fontWeight={600}
                      color="brand.900"
                      fontSize="36px"
                    >
                      Sponsor us
                    </Text>
                    <Center>
                      <VStack>
                        <Text
                          textAlign="center"
                          color="brand.900"
                          paddingTop="20px"
                          width="80%"
                          fontSize="20px"
                        >
                          {" "}
                          GNSSO is dedicated to advancing interest and education
                          in STEM throughout our school and community. As a
                          student-run club, extensive funding is required for
                          competitions, builds, and equipment. Through the help
                          of sponsors, we can effectively address financial
                          barriers, which allows us to truly focus on our
                          passions for STEM and become an overall stronger team.
                          Sponsors will also amplify our potential as
                          ambassadors of STEM education, assisting us in funding
                          events to share our enthusiasm and expertise with
                          younger members of the community. If you are
                          interested in supporting us and making a donation,
                          please fill out the form below for more information!
                        </Text>
                        <Button
                          as="a"
                          href="/contact"
                          _hover={{ bg: "brand.900" }}
                          bg="brand.100"
                          color="white"
                          marginTop="10px"
                          width="100px"
                          height="34px"
                        >
                          Contact us
                        </Button>
                      </VStack>
                    </Center>
                  </Box>
                </Box>
                <Box padding={20}  bg="transparent" width={['100%', '100%', '100%', "35%"]}>
                  <img src={scioly1} alt="scioly1" />
                </Box>
              </Stack>
            </Center>
          </Box>
        </Center>
      </VStack>
    </Box>
  );
}
