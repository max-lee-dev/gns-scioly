import React, { useEffect } from "react";
import Bullet from "./Bullet";
import {
  Box,
  Text,
  Center,
  VStack,
  extendTheme,
  HStack,
  Divider,
} from "@chakra-ui/react";

export default function PhoneComponent2022() {
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
    <VStack paddingLeft="20px" alignItems={"flex-start"}>
      <Text
        className="hidden"
        paddingTop="150px"
        fontWeight={800}
        color="brand.900"
        fontSize="50px"
      >
        2020-2021
      </Text>
      <Box>
        <Center>
          <Bullet pos={2190} margin={30} />
          <Box
            fontSize="30px"
            top="2180"
            paddingLeft="245px"
            position="absolute"
          >
            <HStack>
              <Box>Nationals</Box>
            </HStack>
            <Text
              minW="200px"
              fontWeight="200"
              paddingRight="5px"
              textAlign="left"
              fontSize="18px"
            >
              May 17-22, 2021
            </Text>
            <Text textAlign="left" fontWeight="300" fontSize="20px">
              {" "}
              19th Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Bullet pos={2390} margin={0} />
          <Box
            fontSize="30px"
            top="2375"
            paddingLeft="245px"
            position="absolute"
          >
            <HStack>
              <Text alignText="left">States</Text>
              <Box paddingLeft="20px" paddingTop="10px" color="gold.100">
                <ion-icon name="trophy"></ion-icon>
              </Box>
            </HStack>
            <Text fontWeight="200" textAlign="left" fontSize="18px">
              April 10, 2021
            </Text>
            <Text
              minW="200px"
              textAlign="left"
              fontWeight="300"
              fontSize="20px"
            >
              {" "}
              1st Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Bullet pos={2600} margin={-10000} />
          <Box
            fontSize="30px"
            top="2585"
            marginLeft="220px"
            position="absolute"
          >
            <HStack>
              <Box>Regionals</Box>
              <Box paddingTop="10px" color="gold.100">
                <ion-icon name="trophy"></ion-icon>
              </Box>
            </HStack>
            <Text fontWeight="200" textAlign="left" fontSize="18px">
              March 20, 2021
            </Text>
            <Text textAlign="left" fontWeight="300" fontSize="20px">
              {" "}
              1st Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
    </VStack>
  );
}
