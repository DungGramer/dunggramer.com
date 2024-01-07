import React, { ReactNode } from 'react';
import { Link, Text } from '@chakra-ui/react';

export default function MenuItem({ children, to = '/', ...rest }) {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
}
