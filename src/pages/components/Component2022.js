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

export default function Component2022() {
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
    <VStack>
      <Text
        className="hidden"
        paddingTop="150px"
        fontWeight={800}
        color="brand.900"
        fontSize="50px"
      >
        2021-2022
      </Text>
      <Box>
        <Center>
          <Bullet pos={1500} margin={30} />
          <Box
            fontSize="30px"
            top="1485"
            paddingLeft="215px"
            position="absolute"
          >
            <HStack>
              <Box>Nationals</Box>
            </HStack>
            <Text
              fontWeight="200"
              paddingRight="5px"
              textAlign="left"
              fontSize="18px"
            >
              May 14, 2022
            </Text>
            <Text textAlign="left" fontWeight="300" fontSize="20px">
              {" "}
              18th Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Bullet pos={1700} margin={0} />
          <Box
            fontSize="30px"
            top="1685"
            paddingRight="215px"
            position="absolute"
          >
            <HStack>
              <Box paddingLeft="25px" paddingTop="10px" color="silver.100">
                <ion-icon name="trophy"></ion-icon>
              </Box>
              <Box>States</Box>
            </HStack>
            <Text
              fontWeight="200"
              paddingRight="5px"
              textAlign="right"
              fontSize="18px"
            >
              March 18-19, 2022
            </Text>
            <Text textAlign="right" fontWeight="300" fontSize="20px">
              {" "}
              2nd Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Bullet pos={1905} margin={-10000} />
          <Box
            fontSize="30px"
            top="1890"
            marginLeft="220px"
            position="absolute"
          >
            <HStack>
              <Box>Regionals</Box>
              <Box paddingTop="10px" color="gold.100">
                <ion-icon name="trophy"></ion-icon>
              </Box>
            </HStack>
            <Text
              fontWeight="200"
              paddingLeft="5px"
              textAlign="left"
              fontSize="18px"
            >
              February 5, 2022
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
