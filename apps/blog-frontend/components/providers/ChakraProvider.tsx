"use client";

import { ChakraProvider as _ChakraProvider } from "@chakra-ui/react";

import { CacheProvider } from "@chakra-ui/next-js";


export default function ChakraProvider({ children }) {
  return (
    <CacheProvider>
      <_ChakraProvider>{children}</_ChakraProvider>
    </CacheProvider>
  );
}
