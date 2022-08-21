import React from "react";
import { FormControl, Button, Input, Flex, useTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Signup = ({ setFormView }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <FormControl>
      <Flex
        direction="column"
        justify="space-between"
        height="200px"
        marginTop={10}
      >
        <Input placeholder="First Name*" />
        <Input placeholder="Last Name*" />
        <Input placeholder="Email*" />
        <Input placeholder="Password*" type="password" />
      </Flex>
      <Flex justify="space-around" marginTop={5} paddingBottom={5}>
        <Button onClick={() => setFormView("welcome")}>Cancel</Button>
        <Button
          bgColor={theme.brand.colorPrimary9}
          color="white"
          onClick={() => router.push("/dashboard")}
        >
          Sign Up
        </Button>
      </Flex>
    </FormControl>
  );
};

export default Signup;
