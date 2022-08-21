import React, { useState } from "react";
import { Box, Center, Flex, Button } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import Modal from "../components/Modal";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Heading } from "@chakra-ui/react";

const Landing = () => {
  const [formView, setFormView] = useState("");
  const theme = useTheme();

  return (
    <>
      <Center h="100vh" bgColor={theme.brand.colorPrimary7}>
        <Box width={400} h={300} borderRadius={10} bgColor="white">
          <Heading textAlign="center" marginTop={10}>
            Welcome to the App
          </Heading>
          <Flex justifyContent="space-around" alignItems="center" h="100%">
            <Button onClick={() => setFormView("login")} color="black">
              Click to login
            </Button>

            <Button
              bgColor={theme.brand.colorPrimary9}
              onClick={() => setFormView("signup")}
              color="white"
            >
              Click to Signup{" "}
            </Button>
          </Flex>
        </Box>
      </Center>

      <Modal isOpen={formView === "login"} onClose={() => setFormView("")}>
        <Login />
      </Modal>

      <Modal isOpen={formView === "signup"} onClose={() => setFormView("")}>
        <Signup />
      </Modal>
    </>
  );
};

export default Landing;
