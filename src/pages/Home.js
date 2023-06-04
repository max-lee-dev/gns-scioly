import React, { useRef } from "react";
import scioly from "./components/images/scioly-thumbnail.png";
import Scioly from "./components/Scioly";
import "react-slideshow-image/dist/styles.css";
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

export default function Home() {
  const ref = useRef(null);

  function handleClick() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }
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
  ];

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "600px",
    borderRadius: "15px",
  };

  

  return (
    <Box className="font">
      <Box>
        {" "}
        <Box
          backgroundSize="cover"
          minH={["100vh", "90vh", "92vh"]}
          opacity={[1, 1, 0.65]}
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
                color="white"
              >
                Great Neck South
                <Text display={["none", "none", "initial"]}>
                  {" "}
                  High School
                </Text>{" "}
                <Text>Science Olympiad</Text>
              </Text>
              <Box paddingTop="350px" opacity="1">
                <Button
                  onClick={handleClick}
                  fontSize={[15, 15, 20]}
                  minH={[10, 10, 12]}
                  _hover={{ bg: "#5180c4" }}
                  color="white"
                  borderRadius="5px"
                  bg="#0c3278"
                >
                  What is Science Olympiad?
                </Button>
              </Box>
            </VStack>
          </Center>
        </Box>
        <Divider borderWidth="2px" borderColor="#204a97" />
        <Box minH="85vh">
          <Scioly ref={ref} text="What is Science Olympiad?" />
          <Stack direction={["column", "column", "row"]}>
            <Box
              color="black"
              paddingBottom="70px"
              paddingLeft="20px"
              width={["100%", "100%", "45%"]}
            >
              <Text fontSize="40px">Who are we?</Text>
              <Text fontSize="20px">
                The Great Neck South Science Olympiad club each year prepare for
                and compete in various competitions. Through each competition,
                we develop our knowledge and skill and prepare for regional,
                state, and national competitions. Our club consists of three
                teams with 15 members each and provides students with an
                opportunity to explore the world of science.
              </Text>
            </Box>

            <Box width={["100%", "100%", "50%"]}>
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
      </Box>
    </Box>
  );
}
