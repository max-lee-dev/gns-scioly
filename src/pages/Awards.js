import React from "react";
import { Box, Text, Center, VStack, extendTheme } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Awards() {
  return (
    <Box className="font" color="black">
      <Center>
        <Box>
          <Center>
            <VStack>
              <Text fontSize="40px">2022-2023</Text>
              <Box>
                <VerticalTimeline
                  animate={true}
                  layout={"2-columns"}
                  lineColor="#204A97"
                >
                  <VerticalTimelineElement
                    className="testTimelineElement"
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    contentStyle={{
                      background: "rgb(33, 150, 243)",
                      width: "50%",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Creative Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Miami, FL
                    </h4>
                    <p>
                      Creative Direction, User Experience, Visual Design,
                      Project Management, Team Leading
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Art Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      San Francisco, CA
                    </h4>
                    <p>
                      Creative Direction, User Experience, Visual Design, SEO,
                      Online Marketing
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Web Designer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Los Angeles, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{
                      background: "rgb(33, 150, 243)",
                      color: "#fff",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Web Designer
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      San Francisco, CA
                    </h4>
                    <p>User Experience, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Content Marketing for Web, Mobile and Social Media
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Online Course
                    </h4>
                    <p>Strategy, Social Media</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Agile Development Scrum Master
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Certification
                    </h4>
                    <p>Creative Direction, User Experience, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Bachelor of Science in Interactive Digital Media Visual
                      Imaging
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      Bachelor Degree
                    </h4>
                    <p>Creative Direction, Visual Design</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    iconStyle={{
                      background: "rgb(16, 204, 82)",
                      color: "#fff",
                    }}
                  />
                </VerticalTimeline>
              </Box>
            </VStack>
          </Center>
        </Box>
      </Center>
    </Box>
  );
}
