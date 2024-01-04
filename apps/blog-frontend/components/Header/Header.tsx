import { Box, Flex, Heading } from '@chakra-ui/react';
import { ArrowDown } from '@dunggramer/icons/ArrowDown';
import { Logo } from '@dunggramer/icons/Logo';

const Header = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box>
        <Heading size="md">
          <ArrowDown fontSize={`100px`} color='red' fill='red' />
          <Logo fontSize={`100px`} width={90} height={90} color='red' fill='red' />
          <i className='dg-logo' />
          Hello
        </Heading>
      </Box>
    </Flex>
  );
};

export default Header;
