import React, { useEffect } from "react";
import Component2022 from "./components/Component2022";
import Section from "./components/Section";
import {
  Box,
  Text,
  Center,
  VStack,
  HStack,
  extendTheme,
  Divider,
} from "@chakra-ui/react";
import Bullet from "./components/Bullet";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Awards() {
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
    <Box className="font" color="black" minH="150vh">
      <Center>
        <Box>
          <Center>
            <VStack>
              <Text fontWeight={600} fontSize="40px">
                2022-2023
              </Text>
              <Box>
                <Center>
                  <Box>
                    <Bullet pos={200} margin={12} />
                    <Box
                      fontSize="30px"
                      paddingLeft="25px"
                      position="absolute"
                      top="180"
                    >
                      <HStack>
                        <Box>Battle at Valley Forge </Box>
                        <Box paddingTop="10px" color="silver.100">
                          <ion-icon name="trophy"></ion-icon>
                        </Box>
                      </HStack>
                      <Box>
                        <Text
                          fontWeight="200"
                          paddingRight="5px"
                          fontSize="18px"
                        >
                          December 17, 2022
                        </Text>
                        <Text fontWeight="300" fontSize="20px">
                          {" "}
                          2nd Place Overall
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Center>
              </Box>
              <Box>
                <Center>
                  <Bullet pos={400} />
                  <Box
                    fontSize="30px"
                    top="385"
                    paddingRight={["-5", "-5", "400px"]}
                    position="absolute"
                  >
                    <HStack>
                      <Box paddingTop="10px" color="bronze.100">
                        <ion-icon name="trophy"></ion-icon>
                      </Box>
                      <Box>Long Island Invitational</Box>
                    </HStack>
                    <Text
                      textAlign="right"
                      fontWeight="200"
                      paddingRight="5px"
                      fontSize="18px"
                    >
                      January 7, 2023
                    </Text>
                    <Text textAlign="right" fontWeight="300" fontSize="20px">
                      {" "}
                      3rd Place Overall
                    </Text>
                  </Box>
                </Center>
              </Box>
              <Box>
                <Center>
                  <Bullet pos={600} margin={-5} />
                  <Box
                    fontSize="30px"
                    top="585"
                    paddingLeft="220px"
                    position="absolute"
                  >
                    <HStack>
                      <Box>Regionals</Box>
                      <Box paddingTop="10px" color="gold.100">
                        <ion-icon name="trophy"></ion-icon>
                      </Box>
                    </HStack>
                    <Text
                      textAlign="left"
                      fontWeight="200"
                      paddingRight="5px"
                      fontSize="18px"
                    >
                      February 4, 2023
                    </Text>
                    <Text fontWeight="300" fontSize="20px">
                      {" "}
                      1st Place Overall
                    </Text>
                  </Box>
                </Center>
              </Box>
              <Box>
                <Center>
                  <Bullet pos={800} />
                  <Box
                    fontSize="30px"
                    top="785"
                    paddingRight="175px"
                    position="absolute"
                  >
                    <HStack>
                      <Box paddingTop="10px" color="gold.100">
                        <ion-icon name="trophy"></ion-icon>
                      </Box>
                      <Box>BirdSO</Box>
                    </HStack>
                    <Text
                      textAlign="left"
                      fontWeight="200"
                      paddingRight="25px"
                      fontSize="18px"
                    >
                      February 11-18, 2023
                    </Text>
                    <Text fontWeight="300" fontSize="20px">
                      {" "}
                      1st Place Overall
                    </Text>
                  </Box>
                </Center>
              </Box>
              <Box>
                <Center>
                  <Bullet pos={1000} margin={-2} />
                  <Box
                    fontSize="30px"
                    top="985"
                    paddingLeft="330px"
                    position="absolute"
                  >
                    <HStack>
                      <Box>UPenn Invitational</Box>
                    </HStack>
                    <Text
                      fontWeight="200"
                      paddingRight="5px"
                      fontSize="18px"
                      textAlign="left"
                    >
                      February 18, 2023
                    </Text>
                    <Text fontWeight="300" fontSize="20px">
                      {" "}
                      7th Place Overall
                    </Text>
                  </Box>
                </Center>
              </Box>
              <Box>
                <Center>
                  <Bullet pos={1225} margin={-10000} />
                  <Box
                    fontSize="30px"
                    top="1210"
                    paddingRight="175px"
                    position="absolute"
                  >
                    <HStack>
                      <Box paddingTop="10px" color="bronze.100">
                        <ion-icon name="trophy"></ion-icon>
                      </Box>
                      <Box>States</Box>
                    </HStack>
                    <Text
                      fontWeight="200"
                      paddingRight="5px"
                      textAlign="left"
                      fontSize="18px"
                    >
                      March 17-18, 2023
                    </Text>
                    <Text fontWeight="300" fontSize="20px">
                      {" "}
                      3rd Place Overall
                    </Text>
                  </Box>
                </Center>
              </Box>
              <Component2022 />
            </VStack>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}
