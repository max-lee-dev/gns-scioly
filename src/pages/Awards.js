import React, { useEffect } from "react";
import Component2022 from "./components/Component2022";
import Section from "./components/Section";
import Component2023 from "./components/Component2023";
import PhoneComponent2023 from "./components/PhoneComponent2023";
import PhoneComponent2022 from "./components/PhoneComponent2022";
import PhoneComponent2021 from "./components/PhoneComponent2021";
import Component2021 from "./components/Component2021";
import {
  Box,
  Text,
  Center,
  VStack,
  HStack,
  extendTheme,
  Divider,
} from "@chakra-ui/react";
import Bullet from "./components/Bullet";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Awards() {
  return (
    <Box
      paddingBottom="100px"
      className="font"
      color="black"
      minH={["410vh", "410vh", "350vh"]}
    >
      <Box display={["none", "none", "block"]}>
        <Component2023 />

        <Component2022 />
        <Component2021 />
      </Box>
      <Box display={["block", "block", "none"]}>
        <PhoneComponent2023 />
        <PhoneComponent2022 />
        <PhoneComponent2021 />
      </Box>
    </Box>
  );
}
