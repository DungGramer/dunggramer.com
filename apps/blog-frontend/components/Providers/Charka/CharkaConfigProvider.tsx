import theme from '#blog-frontend/components/Providers/Charka/theme';
import { ChakraProvider } from '@chakra-ui/react';

export function CharkaConfigProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
}
