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

export default function Component2023() {
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
      <Center>
        <Text
          className="hidden"
          fontWeight={800}
          color="brand.900"
          fontSize="50px"
        >
          2022-2023
        </Text>
      </Center>
      <Box>
        <Box>
          <Bullet pos={200} margin={16} />
          <Box fontSize="30px" paddingLeft="25px" position="absolute" top="180">
            <HStack>
              <Box>States </Box>
              <Box paddingTop="10px" color="bronze.100">
                <ion-icon name="trophy"></ion-icon>
              </Box>
            </HStack>
            <Box>
              <Text fontWeight="200" paddingRight="5px" fontSize="18px">
                March 17-18, 2023
              </Text>
              <Text fontWeight="300" fontSize="20px">
                {" "}
                3rd Place Overall{" "}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Center>
          <Bullet pos={400} />
          <Box
            minW="600px"
            fontSize="30px"
            top="385"
            paddingLeft={"320px"}
            position="absolute"
          >
            <HStack>
              <Box>UPenn Invitational</Box>
            </HStack>
            <Text
              textAlign="left"
              fontWeight="200"
              paddingRight="0px"
              fontSize="18px"
            >
              February 18, 2023
            </Text>
            <Text textAlign="left" fontWeight="300" fontSize="20px">
              {" "}
              7th Place Overall
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
            paddingLeft="180px"
            position="absolute"
          >
            <HStack>
              <Box>BirdSO</Box>
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
          <Bullet pos={800} margin={-1} />
          <Box
            fontSize="30px"
            top="785"
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
              paddingRight="25px"
              fontSize="18px"
            >
              February 4, 2023
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
          <Bullet pos={1000} margin={-2} />
          <Box
            minW="300px"
            fontSize="30px"
            top="985"
            marginLeft="355px"
            position="absolute"
          >
            <HStack spacing={0}>
              <Box maxW="170px">Long Island Invitational</Box>
              <Box paddingTop="10px" color="bronze.100">
                <ion-icon name="trophy"></ion-icon>
              </Box>
            </HStack>
            <Text
              fontWeight="200"
              paddingRight="5px"
              fontSize="18px"
              textAlign="left"
            >
              January 7, 2023
            </Text>
            <Text fontWeight="300" fontSize="20px">
              {" "}
              3rd Place Overall
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
            paddingLeft="260px"
            position="absolute"
          >
            <HStack>
              <Box minW="170px">Battle at Valley Forge </Box>
              <Box paddingTop="10px" color="silver.100">
                <ion-icon name="trophy"></ion-icon>
              </Box>
            </HStack>
            <Text
              fontWeight="200"
              paddingLeft="5px"
              textAlign="left"
              fontSize="18px"
            >
              December 17, 2022
            </Text>
            <Text textAlign="left" fontWeight="300" fontSize="20px">
              {" "}
              2nd Place Overall
            </Text>
          </Box>
        </Center>
      </Box>
    </VStack>
  );
}
