import React from "react";
import { Stack, Link } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Stack as="nav" direction="row" spacing={8} align="center">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </Stack>
  );
};

export default Navigation;
