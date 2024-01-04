import { Box, Flex, Heading } from '@chakra-ui/react';

const Header = () => {
  return <Flex minWidth="max-content" alignItems="center" gap="2">
    <Box>
      <Heading size='md'>
        <i className='dg-send' />
      </Heading>
    </Box>
  </Flex>;
};

export default Header;
