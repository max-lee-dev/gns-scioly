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
            direction={["column", "column", "column", "row"]}
          >
            <Box width={["100%", "100%", "100%", "47%"]} className="hidden">
              <Scioly text="What is Science Olympiad?" />
            </Box>
            <Box
              paddingLeft="40px"
              paddingTop="60px"
              width={["100%", "100%", "100%", "50%"]}
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
          <Stack marginTop={10} justifyContent="space-between"
                 direction={["column", "column", "column", "row"]}>
            <Box margin={20} width={["100%", "100%", "100%", "50%"]}>
              <img src={gnshome} alt="gnshome" width="100%" />
            </Box>
            <Box paddingBottom="50px" width={["100%", "100%", "100%", "40%"]} className="hiddenRight">
              <Text textAlign={"center"} fontSize="40px">
                Who are we?
              </Text>
              <Text textAlign={"center"} fontSize="26px">
                During the year, we study, build, or practice lab procedures
                related to our events to prepare for competitions. This involves
                immersing ourselves into specific fields, striving to learn as
                much as possible or create the best device possible. By using
                teamwork to solve problems, we promote curiosity and cultivate
                appreciation for science while pursuing knowledge and honing our
                skills. We also assist the Great Neck South Middle School
                Science Olympiad club, building connections with younger
                students to promote their enthusiasm for STEM.
              </Text>
            </Box>

          </Stack>
        </Box>
      </Center>
    </Box>
  );
}
