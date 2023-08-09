import React, { useEffect } from "react";
import {
  Box,
  Stack,
  Button,
  HStack,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react";
import Scioly from "./components/Scioly";
import sciolylogo from "./components/images/sciolylogo.png";

import gnshome from "./components/images/gnshome.png";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    const hiddenElements2 = document.querySelectorAll(".hiddenRight");
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
    hiddenElements2.forEach((element) => {
      observer.observe(element);
    });
  }, []);
  return (
    <Box className="font" color="black">
      <Center>
        <Box marginTop="20px" minH="110vh" width="80%">
          <Stack
            justifyContent="space-between"
            direction={["column", "column", "row"]}
          >
            <Box width="47%" className="hidden">
              <Scioly text="What is Science Olympiad?" />
            </Box>
            <Box
              paddingLeft="40px"
              paddingTop="60px"
              width={["100%", "100%", "50%"]}
            >
              <img src={sciolylogo} alt="gnshome" width="100%" />
              <Center>
                <Button
                  as="a"
                  href="https://www.soinc.org/info/about-science-olympiad"
                  marginTop="20px"
                  paddingBottom="3px"
                  color="white"
                  _hover={{ bg: "brand.900" }}
                  bg="brand.100"
                  marginRight="20px"
                  width="100px"
                >
                  Learn more
                </Button>
              </Center>
            </Box>
          </Stack>
          <HStack paddingLeft="16px" paddingTop="50px">
            <Box width="50%">
              <img src={gnshome} alt="gnshome" width="80%" />
            </Box>
            <Box width="40%" className="hiddenRight">
              <Text fontSize="40px">Who are we?</Text>
              <Text fontSize="26px">
                The Great Neck South Science Olympiad club each year prepare for
                and compete in various competitions. Through each competition,
                we develop our knowledge and skill and prepare for regional,
                state, and national competitions. Our club consists of three
                teams with 15 members each and provides students with an
                opportunity to explore the world of science.
              </Text>
            </Box>
          </HStack>
        </Box>
      </Center>
    </Box>
  );
}
