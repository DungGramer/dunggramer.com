'use client';

import { Box, Flex, Spacer } from '@chakra-ui/react';
import { Logo } from '@dunggramer/icons/Logo';
import { useState } from 'react';
import MenuToggle from './MenuToggle';
import MenuLinks from './MenuLinks';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      alignItems="center"
      gap="2"
      as="nav"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
    >
      <Box color={['white', 'white', 'primary.500', 'primary.500']}>
        <Logo width={50} height={50} fill="currentColor" />
      </Box>
      <Spacer />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </Flex>
  );
};

export default Header;
