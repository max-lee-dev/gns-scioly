import React, { useRef, useEffect } from "react";
import gnshome from "./components/images/gnshome.png";
import scioly from "./components/images/scioly-thumbnail.png";
import "react-slideshow-image/dist/styles.css";

import Section from "./components/Section";
import slide1 from "./components/images/slide1.png";
import slide2 from "./components/images/slide2.png";
import slide3 from "./components/images/slide3.png";
import slide4 from "./components/images/slide4.png";
import slide5 from "./components/images/slide5.png";
import slide6 from "./components/images/slide6.png";

import Slideshow from "./components/Slideshow";

import {
  Box,
  Center,
  HStack,
  VStack,
  Text,
  Button,
  Stack,
  Divider,
} from "@chakra-ui/react";
const slideImages = [
  {
    url: slide1,
    caption: "Slide 1",
  },
    {
    url: slide2,
    caption: "Slide 2",
    },
    {
    url: slide3,
    caption: "Slide 3",

    },
    {
    url: slide4,
    caption: "Slide 4",

    },
    {
    url: slide5,
    caption: "Slide 5",

    },
    {
    url: slide6,
    caption: "Slide 6",

    }
];


const divStyle = {
  paddingTop: "56.25%",
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

export default function Home() {
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
    <Section delay={0.2}>
      <Box className="font">
        <Box>
          {" "}
          <Box
            backgroundSize="cover"
            minH={["100vh", "90vh", "92vh"]}
            opacity={[1, 1, 0.75]}
            borderColor="transparent"
            backgroundImage={scioly}
          >
            <Center>
              <VStack>
                <Text
                  textAlign={"center"}
                  paddingTop={[35, 35, "100px"]}
                  fontSize={["28px", "28px", "50px"]}
                  fontWeight={700}
                >
                  Great Neck South
                  <Text display={["none", "none", "initial"]}>
                    {" "}
                    High School
                  </Text>{" "}
                  <Text>Science Olympiad</Text>
                </Text>
              </VStack>
            </Center>
          </Box>
          <Divider borderWidth="2px" borderColor="#204a97" />
          <Center>
            <Box pb={10} paddingTop={[12, 8, 4]} width={['100%', '100%', '100%', '84%']} >
              <Stack direction={["column", "column", "column","column", "row"]}>
                <Box
                  className="hidden"
                  color="black"
                  paddingTop={[2, 4, 6]}
                  width={["100%", "100%", "100%","100%", "50%"]}
                >
                  <Text textAlign={"center"} fontWeight={600} fontSize="36px">
                    Meet GNSSO
                  </Text>
                  <Text textAlign={"center"} px={[4,12,0]} fontSize="20px">
                    Established in 1986 and based in New York, Great Neck South
                    Science Olympiad (GNSSO) seeks to develop students' passions
                    for science, challenging their knowledge through
                    participation in competitions at the regional, state, and
                    national level. Our club has 45 members, split into 3 teams.
                    Over the years, we have grown into a close-knit group with
                    strong team spirit and camaraderie among members, qualifying
                    for the state competition since 2010 and placing top 3 in
                    the state competition since 2021.
                  </Text>
                  <Box width="100%" display="flex" justifyContent={"center"}>
                    <Button
                      _hover={{ bg: "brand.900" }}
                      bg="brand.100"
                      as="a"
                      color="white"
                      href="/about"
                      marginTop="10px"
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
                <Box
                  pt={10}
                  px={2}
                  width={["100%", "100%", "100%","100%", "50%"]}
                >
                  <Slideshow type={"scioly"} />
                </Box>
              </Stack>
            </Box>
          </Center>
        </Box>
      </Box>
    </Section>
  );
}
