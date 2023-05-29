import React from "react";
import { Box, Center, HStack, VStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Box className="opacity">
        {" "}
        <Center>
          <Box>
            <Text fontSize="24px" color="black" position="absolute">
              h{" "}
            </Text>
            <img
              width="100%"
              src="https://cdn.discordapp.com/attachments/691735762538070096/1112540429339070524/AJFCJaW7jDHLXa8jxVlh79-T7z5KuXD7yvjrZbwZ_eTo-iHnGgtsA7UlXcVT0JuL4jS5nFDM154SIvTHMTM4MSyxlfhtzwyC9h6jMYjBmg8oy9X82sYmnsvRSEpQY0HRhipR3IHtV4LQkNJ8tSD5gO8psfsSw1662-h937-s-no.png"
              alt=""
            ></img>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
