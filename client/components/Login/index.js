import React from "react";
import { useRouter } from "next/router";
import { FormControl, Input, Button, useTheme, Flex } from "@chakra-ui/react";

const Login = ({ setFormView }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <FormControl>
      <Flex
        marginTop={50}
        direction="column"
        height="100px"
        justify="space-between"
      >
        <Input placeholder="Email*" />
        <Input placeholder="Password*" type="password" />
      </Flex>
      <Flex marginTop={6} paddingBottom={5} justify="space-around">
        <Button onClick={() => setFormView("welcome")}>Cancel</Button>
        <Button
          onClick={() => router.push("/dashboard")}
          bgColor={theme.brand.colorPrimary9}
          color="white"
        >
          Login
        </Button>
      </Flex>
    </FormControl>
  );
};

export default Login;
