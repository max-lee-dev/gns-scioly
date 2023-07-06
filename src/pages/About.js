import React, { useEffect } from "react";
import { Box, Stack, HStack, VStack, Text, Center } from "@chakra-ui/react";
import Scioly from "./components/Scioly";

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

    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);
  return (
    <Box color="black">
      <Box minH="85vh">
        <Box paddingLeft="40px" className="hidden">
          <Scioly text="What is Science Olympiad?" />
        </Box>
        <Stack direction={["column", "column", "row"]}>
          <Box
            className="hidden"
            color="black"
            paddingBottom="70px"
            paddingTop="10px"
            paddingLeft="60px"
            width={["100%", "100%", "45%"]}
          ></Box>
          <Box
            paddingLeft="40px"
            paddingTop="60px"
            width={["100%", "100%", "50%"]}
          >
            <img src={gnshome} alt="gnshome" width="100%" />
          </Box>
        </Stack>
        <Text fontSize="40px">Who are we?</Text>
        <Text fontSize="26px">
          The Great Neck South Science Olympiad club each year prepare for and
          compete in various competitions. Through each competition, we develop
          our knowledge and skill and prepare for regional, state, and national
          competitions. Our club consists of three teams with 15 members each
          and provides students with an opportunity to explore the world of
          science.
        </Text>
      </Box>
    </Box>
  );
}
