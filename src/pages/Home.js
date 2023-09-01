import React, { useRef, useEffect } from "react";
import gnshome from "./components/images/gnshome.png";
import scioly from "./components/images/scioly-thumbnail.png";
import "react-slideshow-image/dist/styles.css";

import Section from "./components/Section";
import { Slide } from "react-slideshow-image";

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
    url: "https://cdn.discordapp.com/attachments/691735762538070096/1114703510454411304/AJFCJaUj3HPPsdwCw0YayOUcW7F3dQwM0UgL3YaEmN3L2rUunBN3Eg3ZLkNtoup5RKdou_PnehXrxEX3-YeT6VsOpOICm5haaQqRF8mbaHSNNKKjYJhlRW37ioMFwURXz5UmwxyE7La8b6gAUKnbRVFfj3dHBgw1249-h937-s-no.png",
    caption: "Slide 1",
  },
  {
    url: "https://cdn.discordapp.com/attachments/691735762538070096/1114704094033088532/AJFCJaUKokm7r7VF59q_nUosIVYFkmbU-4vbWCy8bfOhGjt9IQ3IPfu7SwpL3DPpD3E981nqgJAtgdim0RZaDizgGE83iFwqp36kYqjs8T6sDEj23uyByUdJ7-r3iOuCaibOf7dyzRmY8jldiw2koFfQnysUIQw703-h937-s-no.png",
    caption: "Slide 2",
  },
  {
    url: "https://cdn.discordapp.com/attachments/691735762538070096/1114704286136410232/AJFCJaXvXH9ynu1Aj_XvsQmE5iYAzFN9GXvytHxBQYygNjUaxLmZ-Nql7Xd3tl9sxRc3TIcs5Pqr1_HeGpuK8IQ7TKZ1PQGoqwq-X3gEXLnNFLA1DmeEFuGG_QF645X-LZhzUSAuj6Oi8ANee_r83G82_MwKrww1024-h768-s-no.png",
    caption: "Slide 3",
  },
  {
    url: "https://cdn.discordapp.com/attachments/691735762538070096/1114704587274850314/AJFCJaV3vq4grfIEZXOHODV93UWYrB6EnLfFb7dTcDgNMElIkK-U-z8DFcNZVWmybZ-siYLg5Rns1yQu80x5vl6zfULfkzVp-rJaN36f95xI4kA36qnMKDX7K5Ysk5phh5kJWtXxoviLODuWaVoVaKJgoCRxw1249-h937-s-no.png",
    caption: "Slide 4",
  },
  {
    url: "https://cdn.discordapp.com/attachments/691735762538070096/1114705108916260874/AJFCJaXNIe4Jf2mpMCen-u_BHzpiDze3Q7PbaZT6itNHXCtSDaUwwfMTjvCjIyShtg-Pb6Egfeql_iizOnDKirBtHPguwGNGDl76_8H6GjxSMk8yzU5wlbFtmuPXyLKDPpgNdDGWUxgDSkRAvkeujh5fx630jww1249-h937-s-no.png",
    caption: "Slide 5",
  },
  {
    url: "https://cdn.discordapp.com/attachments/691735762538070096/1114705654628745287/AJFCJaUDghyoTtZLR8ma9kulGiuuimOMEMz4k1XNeg4Y71kkSzzEcprknlIBAstIGpbXJywePA_gpRQGIfqN3FB52e6analPhAnfPPZhLAiUak0ujMUN4Put31ctfldZUAVUUQaIHKUbwXgE3tRpAoo4VNb8ZQw1249-h937-s-no.png",
    caption: "Slide 6",
  },
  {
    url: "https://cdn.discordapp.com/attachments/691735762538070096/1125233865284390932/IMG_0745.jpg",
    caption: "Slide 8",
  },
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
  width: "100%",
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
                  fontWeight="700"
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
            <Box paddingTop="100px" width="70%" minH="85vh">
              <Stack direction={["column", "column", "row"]}>
                <Box
                  className="hidden"
                  color="black"
                  paddingBottom="70px"
                  paddingTop="10px"
                  width={["100%", "100%", "40%"]}
                >
                  <Text textAlign={"center"} fontSize="40px">
                    Meet GNSSO
                  </Text>
                  <Text textAlign={"center"} fontSize="26px">
                    Established in 1986 and based in New York, Great Neck South
                    Science Olympiad (GNSSO) seeks to develop students' passions
                    for science, challenging their knowledge through
                    participation in competitions at the regional, state, and
                    national level. Our club has 45 members, split into 3 teams.
                    Over the years, we have grown into a close-knit group with
                    strong team spirit and camaraderie among members, qualifying
                    for the state competition since 2010 and placing top 10 in
                    the state competition since 2016.
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
                  paddingLeft="40px"
                  paddingTop="60px"
                  width={["100%", "100%", "60%"]}
                >
                  <Slide easing="ease">
                    {slideImages.map((each, index) => (
                      <div key={index} className="each-slide">
                        <div
                          style={{
                            ...divStyle,
                            backgroundImage: `url(${each.url})`,
                          }}
                        ></div>
                      </div>
                    ))}
                  </Slide>
                </Box>
              </Stack>
            </Box>
          </Center>
        </Box>
      </Box>
    </Section>
  );
}
