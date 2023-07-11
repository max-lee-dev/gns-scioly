import React from "react";
import {
  Box,
  Stack,
  Button,
  HStack,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box paddingTop="50px" className="font">
      <VStack>
        <Box>
          <Text color="brand.900" fontWeight={600} fontSize="40px">
            Contact Us
          </Text>
        </Box>
        <Box>
          <Text
            textAlign="center"
            color="brand.900"
            width="100%"
            fontSize="20px"
          >
            {" "}
            If you have any questions, please contact us at{" "}
          </Text>
          <Center>
            <Box fontSize="20px" width="fit-content">
              <a
                href="mailto:greatnecksouthscioly@gmail.com"
                style={{ color: "#204A97" }}
              >
                greatnecksouthscioly@gmail.com
              </a>
            </Box>
          </Center>
        </Box>
        <Box className="input" a color="brand.900" width="100%">
          <form>
            <VStack>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <input type="submit" value="Send Message" />
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
}
