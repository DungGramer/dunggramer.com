'use client';

import React from 'react';
import { Stack, Button, Box } from '@chakra-ui/react';
import MenuItem from './MenuItem';

const menuItems = [
  { to: '/category', label: 'Category' },
  { to: '/tags', label: 'Tags' },
  { to: '/snippet', label: 'Snippet' },
  { to: '/til', label: 'Today I Learned' },
];

export default function MenuLinks({ isOpen }) {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        {menuItems.map((item) => (
          <MenuItem to={item.to} key={item.to}>{item.label}</MenuItem>
        ))}
        {/* <MenuItem to="/signup">
          <Button
            size="sm"
            rounded="md"
            color={['primary.500', 'primary.500', 'white', 'white']}
            bg={['white', 'white', 'primary.500', 'primary.500']}
            _hover={{
              bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
            }}
            variant={'outline'}
          >
            Create Account
          </Button>
        </MenuItem> */}
      </Stack>
    </Box>
  );
}
