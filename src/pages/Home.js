import React, { useRef } from "react";
import Scioly from "./components/Scioly";
import {
  Box,
  Center,
  HStack,
  VStack,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";

export default function Home() {
  const ref = useRef(null);

  function handleClick() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Box className="font">
      <Box className="opacity">
        {" "}
        <Center>
          <Box position="relative">
            <img
              width="2080"
              src="https://cdn.discordapp.com/attachments/691735762538070096/1112540429339070524/AJFCJaW7jDHLXa8jxVlh79-T7z5KuXD7yvjrZbwZ_eTo-iHnGgtsA7UlXcVT0JuL4jS5nFDM154SIvTHMTM4MSyxlfhtzwyC9h6jMYjBmg8oy9X82sYmnsvRSEpQY0HRhipR3IHtV4LQkNJ8tSD5gO8psfsSw1662-h937-s-no.png"
              alt=""
            ></img>
            <Center>
              <Text
                fontSize="50px"
                fontWeight="700"
                color="white"
                position="absolute"
                top="200"
                zIndex="1"
              >
                Great Neck South High School Science Olympiad
              </Text>
              <Button
                onClick={handleClick}
                fontSize="24px"
                minH="50px"
                _hover={{ bg: "#5180c4" }}
                color="white"
                borderRadius="3px"
                bg="#204a97"
                position="absolute"
                top="615"
                zIndex="1"
              >
                What is Science Olympiad?
              </Button>
            </Center>
          </Box>
        </Center>
        <Divider borderWidth="3px" borderColor="#204a97" />
        <Scioly ref={ref} text="What is Science Olympiad?" />
      </Box>
    </Box>
  );
}
