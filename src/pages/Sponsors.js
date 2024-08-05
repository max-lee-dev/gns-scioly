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
import scioly1 from "./components/images/scioly1.jpg";

import Contact from "./Contact";
import yahao1 from "./components/images/yahao1.png";
import yahao2 from "./components/images/yahao2.png";
import yahao3 from "./components/images/yahao3.png";
import yahao4 from "./components/images/yahao4.png";
import Slideshow from "./components/Slideshow";
import { Slide } from "react-slideshow-image";

const yahaoSlideImages = [
  {
    url: yahao1,
    caption: "Slide 1",
  },
  {
    url: yahao2,
    caption: "Slide 2",
  },
  {
    url: yahao3,
    caption: "Slide 3",
  },

  {
    url: yahao4,
    caption: "Slide 4",
  }

];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  margin: "auto",
  borderRadius: "15px",
};


export default function Sponsors() {
  return (
    <Box className="font image" color="black">
      <VStack>
        <Center w={'84%'}>
          <VStack pb={20} pt={[16, 16, 16]} width={['100%', '100%', '100%', '100%']}>
            <Text px={2} textAlign={'center'} color={'black'}>
              <Text as={'span'} fontWeight={500} fontSize="30px">
                Thank you{" "}
              </Text>
              <Text color={"gold.100"} as={'span'} fontWeight={800} fontSize="30px">
                Yahao
              </Text>
              <Text as={'span'} fontWeight={500} fontSize="30px">
                {" "}for sponsoring our community
              </Text>
            </Text>
            <Stack pt={6} w={'100%'} direction={["column", "column", "row"]}>
              <Box width={"50%"}>
                <Slideshow type="yahao"/>
              </Box>
              <Box w={'50%'}>
                <iframe width="100%" height="100%"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6%20Bond%20Street%20Great%20Neck,%20NY%2011021+(Yahao%20Asian%20Cuisine)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
              </Box>

            </Stack>
          </VStack>
        </Center>
        <Center>
          <Box minH="90vh" width="100%">
            <Center>
              <Stack spacing={10} direction={["column", "column", "column", "column", "row"]}>
                <Box marginLeft={15} width={['90%', '90%', '90%', '90%', "55%"]}>
                  <Box marginLeft="20px">
                    <Text
                      textAlign="center"
                      fontWeight={600}
                      color="brand.900"
                      fontSize="36px"
                    >
                      Sponsor us
                    </Text>
                    <Center>
                      <VStack>
                        <Text
                          textAlign="center"
                          color="brand.900"
                          paddingTop="20px"
                          width="80%"
                          fontSize="20px"
                        >
                          {" "}
                          GNSSO is dedicated to advancing interest and education
                          in STEM throughout our school and community. As a
                          student-run club, extensive funding is required for
                          competitions, builds, and equipment. Through the help
                          of sponsors, we can effectively address financial
                          barriers, which allows us to truly focus on our
                          passions for STEM and become an overall stronger team.
                          Sponsors will also amplify our potential as
                          ambassadors of STEM education, assisting us in funding
                          events to share our enthusiasm and expertise with
                          younger members of the community. If you are
                          interested in supporting us and making a donation,
                          please fill out the form below for more information!
                        </Text>
                        <Button
                          as="a"
                          href="/contact"
                          _hover={{ bg: "brand.900" }}
                          bg="brand.100"
                          color="white"
                          marginTop="10px"
                          width="100px"
                          height="34px"
                        >
                          Contact us
                        </Button>
                      </VStack>
                    </Center>
                  </Box>
                </Box>
                <Box paddingLeft={[0, 0, 0, 60, 0]} bg="transparent" width={['100%', '100%', '100%','80%', "35%"]}>
                  <img src={scioly1} alt="scioly1" />
                </Box>
              </Stack>
            </Center>
          </Box>
        </Center>
      </VStack>
    </Box>
  );
}
