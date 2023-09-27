import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  HStack,
  VStack,
  Text,
  Center,
} from "@chakra-ui/react";

import { db } from "./components/firebase.js";
import { addDoc, doc, collection } from "firebase/firestore";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const value = event.target.value;
    if (event.target.name === "name") {
      setName(value);
    }
    if (event.target.name === "email") {
      setEmail(value);
    }
    if (event.target.name === "message") {
      setMessage(value);
    }
  }
  console.log(name, email, message);

  async function add(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields");
        return;
    }

    const newMessage = await addDoc(collection(db, "messages"), {
      name: name,
      email: email,
      message: message,
    });

    console.log("Document written with ID: ", newMessage.id);

    setName("");
    setEmail("");
    setMessage("");
    alert("Message sent!");

  }
  return (
    <Center>
    <Box minH="80vh" paddingTop="50px" className="font" width={'100%'}>
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
        <Box className="input" color="brand.900" width="100%">
          <form onSubmit={add}>
            <VStack>
              <input
                type="text"
                width={'100px'}
                name={"name"}
                value={name}
                onChange={handleChange}
                placeholder="Name"
              />
              <input
                type="text"
                name={"email"}
                value={email}
                onChange={handleChange}
                placeholder="Email"
              />
              <textarea
                placeholder="Message"
                name={"message"}
                value={message}
                onChange={handleChange}
              ></textarea>
              <input type="submit" value="Send Message" />
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  </Center>
  );
}
