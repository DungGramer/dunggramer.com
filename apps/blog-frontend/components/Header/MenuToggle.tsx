import { Box } from '@chakra-ui/react';
import { faBars, faTimes } from '@danieloi/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: 'block', md: 'none' }}
      onClick={toggle}
      fontSize={24}
      cursor={'pointer'}
      color={'white'}
    >
      {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
    </Box>
  );
};

export default MenuToggle;
