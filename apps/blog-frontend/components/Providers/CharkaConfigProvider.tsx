import { ChakraProvider } from '@chakra-ui/react';

export function CharkaConfigProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider resetCSS>{children}</ChakraProvider>;
}
