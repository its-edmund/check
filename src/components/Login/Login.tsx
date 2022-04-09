import { Button, Center, Stack, TextInput } from "@mantine/core";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("jwt_token");

  useEffect(() => {
    if (token) {
      navigate("/inbox");
    }
  }, [navigate, token]);

  const login = async () => {
    try {
      const response = await axios.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("jwt_token", response.data.token);
      navigate("/inbox");
    } catch (err) {
      console.log("login is incorrect");
    }
  };

  return (
    <Center sx={(theme) => ({ height: "100vh" })}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <Stack>
          <TextInput
            placeholder="Username"
            type="text"
            radius="md"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <TextInput
            placeholder="Password"
            type="password"
            radius="md"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <Button type="submit" radius="md">
            Login
          </Button>
        </Stack>
      </form>
    </Center>
  );
};

export default Login;
