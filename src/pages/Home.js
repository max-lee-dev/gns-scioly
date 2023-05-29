import React, { useRef } from "react";
import scioly from "./components/images/scioly-thumbnail.png";
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
          minH={["100vh", "90vh", "92vh"]}
          opacity={[1, 1, 0.65]}
          borderColor="transparent"
          backgroundImage={scioly}
        >
          <Center>
            <VStack>
              <Text
                textAlign={"center"}
                paddingTop={[35, 35, "100px"]}
                fontSize={["28px", "28px", "50px"]}
                fontWeight="700"
                color="white"
              >
                Great Neck South
                <Text display={["none", "none", "initial"]}>
                  {" "}
                  High School
                </Text>{" "}
                <Text>Science Olympiad</Text>
              </Text>
              <Box paddingTop="350px" opacity="1">
                <Button
                  onClick={handleClick}
                  fontSize={[15, 15, 20]}
                  minH={[10, 10, 12]}
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
        <Divider borderWidth="2px" borderColor="#204a97" />
        <Scioly ref={ref} text="What is Science Olympiad?" />
      </Box>
    </Box>
  );
}
