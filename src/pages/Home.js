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
      <Box>
        {" "}
        <Box
          backgroundSize="cover"
          minH="93vh"
          opacity={0.65}
          borderColor="transparent"
          backgroundImage={
            "https://cdn.discordapp.com/attachments/691735762538070096/1112540429339070524/AJFCJaW7jDHLXa8jxVlh79-T7z5KuXD7yvjrZbwZ_eTo-iHnGgtsA7UlXcVT0JuL4jS5nFDM154SIvTHMTM4MSyxlfhtzwyC9h6jMYjBmg8oy9X82sYmnsvRSEpQY0HRhipR3IHtV4LQkNJ8tSD5gO8psfsSw1662-h937-s-no.png"
          }
        >
          <Center>
            <VStack>
              <Text
                paddingTop="150px"
                fontSize="50px"
                fontWeight="700"
                color="white"
              >
                Great Neck South High School Science Olympiad
              </Text>
              <Box paddingTop="400px" opacity="1">
                <Button
                  onClick={handleClick}
                  fontSize="24px"
                  minH="50px"
                  _hover={{ bg: "#5180c4" }}
                  color="white"
                  borderRadius="5px"
                  bg="#0c3278"
                >
                  What is Science Olympiad?
                </Button>
              </Box>
            </VStack>
          </Center>
        </Box>
        <Divider borderWidth="3px" borderColor="#204a97" />
        <Scioly ref={ref} text="What is Science Olympiad?" />
      </Box>
    </Box>
  );
}
