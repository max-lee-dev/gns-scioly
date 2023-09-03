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
        2020-2021
      </Text>
      <Box>
        <Center>
          <Bullet pos={2190} margin={30} />
          <Box
            fontSize="30px"
            top="2180"
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
            paddingRight="185px"
            position="absolute"
          >
            <HStack>
              <Box paddingLeft="20px" paddingTop="10px" color="gold.100">
                <ion-icon name="trophy"></ion-icon>
              </Box>
              <Text alignText="right">States</Text>
            </HStack>
            <Text
              fontWeight="200"
              paddingRight="5px"
              textAlign="right"
              fontSize="18px"
            >
              April 10, 2021
            </Text>
            <Text textAlign="right" fontWeight="300" fontSize="20px">
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
            <Text
              fontWeight="200"
              paddingLeft="5px"
              textAlign="left"
              fontSize="18px"
            >
              March 20, 2021
            </Text>
            <Text textAlign="left" fontWeight="300" fontSize="20px">
              {" "}
              1st Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Bullet pos={2795} margin={-5} />
          <Box
            fontSize="30px"
            top="2785"
            paddingRight="340px"
            position="absolute"
          >
            <HStack>
              <Text alignText="right">Princeton Invitational </Text>
            </HStack>
            <Text
              fontWeight="200"
              paddingRight="5px"
              textAlign="right"
              fontSize="18px"
            >
              February 20, 2021
            </Text>
            <Text textAlign="right" fontWeight="300" fontSize="20px">
              {" "}
              11th Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Bullet pos={3000} margin={-5} />
          <Box
            fontSize="30px"
            top="2990"
            marginLeft="350px"
            position="absolute"
          >
            <HStack>
              <Box>Mira Loma Invitational</Box>
            </HStack>
            <Text
              fontWeight="200"
              paddingLeft="5px"
              textAlign="left"
              fontSize="18px"
            >
              January 9, 2021
            </Text>
            <Text textAlign="left" fontWeight="300" fontSize="20px">
              {" "}
              6th Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Bullet pos={3195} margin={-5} />
          <Box
            fontSize="30px"
            top="3185"
            paddingRight="340px"
            position="absolute"
          >
            <HStack>
              <Text alignText="right">Yosemite Invitational </Text>
            </HStack>
            <Text
              fontWeight="200"
              paddingRight="5px"
              textAlign="right"
              fontSize="18px"
            >
              December 19, 2020
            </Text>
            <Text textAlign="right" fontWeight="300" fontSize="20px">
              {" "}
              11th Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
      <Box>
        <Center>
          <Bullet pos={3400} margin={-5} />
          <Box
            fontSize="30px"
            top="3390"
            marginLeft="440px"
            position="absolute"
          >
            <HStack>
              <Box>Transcontinental Invitational</Box>
            </HStack>
            <Text
              fontWeight="200"
              paddingLeft="1px"
              textAlign="left"
              fontSize="18px"
            >
              November 21, 2020
            </Text>
            <Text textAlign="left" fontWeight="300" fontSize="20px">
              {" "}
              9th Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
    </VStack>
  );
}
