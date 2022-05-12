import { Button, Center, Stack, TextInput, Title, Alert, Box, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { AlertCircle } from "tabler-icons-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import axios from "../../axios";

const Login = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("jwt_token");

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
    validate: values => ({
      username: values.username.length === 0 ? "Username is empty" : null,
      password: values.password.length === 0 ? "Password is empty" : null,
    }),
  });

  useEffect(() => {
    if (token) {
      navigate("/inbox");
    }
  }, [navigate, token]);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("jwt_token", response.data.token);
      navigate("/inbox");
    } catch (err) {
      setLoginFailed(true);
    }
  };

  return (
    <Center sx={theme => ({ height: "100vh" })}>
      <form
        onSubmit={form.onSubmit(values => login(values.username, values.password))}
        onChange={() => {
          setLoginFailed(false);
        }}
      >
        <Stack
          justify="center"
          sx={() => ({
            width: "20vw",
          })}
        >
          <h1 className="text-3xl font-extrabold">Login</h1>
          {loginFailed && (
            <Box
              sx={theme => ({
                backgroundColor: theme.colors.red[5],
                padding: "16px 8px",
                color: "white",
                textAlign: "center",
                borderRadius: "8px",
              })}
            >
              <Text>Incorrect username or password!</Text>
            </Box>
          )}
          <input
            className="rounded-full border-2 border-black text-lg px-3 py-1 font-bold"
            placeholder="Username"
            {...form.getInputProps("username")}
          />
          <input
            className="rounded-full border-2 border-black text-lg px-3 py-1 font-bold"
            placeholder="Password"
            type="password"
            {...form.getInputProps("password")}
          />
          <button className="font-bold border-2 bg-gradient-to-r from-green-400 to-teal-400 border-black rounded-full py-2 px-5 hover:from-black hover:to-black text-black hover:text-white mr-5 w-full">
            Login
          </button>
        </Stack>
      </form>
    </Center>
  );
};

export default Login;
