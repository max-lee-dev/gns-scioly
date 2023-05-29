import React from "react";
import {
  Box,
  HStack,
  Text,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

export default function Navbar() {
  const location = window.location.pathname;

  return (
    <Box
      className="font"
      as="nav"
      position="sticky"
      minH="90px"
      fontWeight="400"
      bgColor="#204a97"
      fontSize="20px"
      color="white"
    >
      <HStack justifyContent="space-between">
        <Box
          paddingTop={["20px", "20px", "5px"]}
          paddingLeft="15px"
          paddingBottom={[0, 0, 2]}
        >
          <HStack as="a" href="/">
            <Box
              display={["initial", "initial", "none"]}
              borderColor="white"
              borderWidth={2}
              borderRadius={100}
            >
              <img
                width={"50"}
                src="https://cdn.discordapp.com/attachments/691735762538070096/1112542903932293161/NewGNPSLogo120wide.png"
                alt=""
              />
            </Box>
            <Box
              display={["none", "none", "initial"]}
              borderColor="white"
              borderWidth={2}
              borderRadius={100}
            >
              <img
                width={"80"}
                src="https://cdn.discordapp.com/attachments/691735762538070096/1112542903932293161/NewGNPSLogo120wide.png"
                alt=""
              />
            </Box>
            <Text
              paddingLeft="5px"
              className="font"
              fontSize={["18px", "18px", "28px"]}
              fontWeight="900"
            >
              <Text>
                Great Neck South
                <Text display={["none", "none", "initial"]}>
                  {" "}
                  Science Olympiad
                </Text>
              </Text>
              <Text display={["initial", "initial", "none"]}>
                {" "}
                Science Olympiad
              </Text>
            </Text>
          </HStack>
        </Box>

        <Box
          paddingTop="20px"
          paddingRight="20px"
          opacity="1"
          display={["block", "block", "none"]}
        >
          <Menu>
            <MenuButton
              as={Text}
              fontSize="27px"
              fontWeight="400"
              color="white"
              _hover={{ color: "#5180c4" }}
            >
              &#9776;
            </MenuButton>
            <MenuList color="black" zIndex="101">
              <MenuItem>
                <Box minW="100%" as="a" href="/about">
                  About
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Box minW="100%" as="a" href="/awards">
                  Awards
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Box minW="100%" as="a" href="/sponsors">
                  Sponsors
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Box minW="100%" as="a" href="/contact">
                  Contact
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box
          paddingRight="20px"
          paddingTop="0px"
          display={["none", "none", "block"]}
        >
          <HStack spacing="10">
            <a
              className={location === "/about" ? "underline" : ""}
              href="/about"
            >
              About
            </a>
            <a
              className={location === "/awards" ? "underline" : ""}
              href="/awards"
            >
              Awards
            </a>
            <a
              className={location === "/sponsors" ? "underline" : ""}
              href="/sponsors"
            >
              Sponsors
            </a>
            <a
              className={location === "/contact" ? "underline" : ""}
              href="/contact"
            >
              Contact
            </a>
          </HStack>
        </Box>
      </HStack>
    </Box>
  );
}
