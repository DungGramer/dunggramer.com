import { inputAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineCssVars } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  field: {
    _disabled: {
      opacity: 1.0,
    },
    _placeholder: {
      opacity: 1,
      color: 'fg.subtle',
    },
  },
})

const vars = defineCssVars('input', ['bg', 'borderColor'])

const variants = {
  outline: definePartsStyle((props) => ({
    field: {
      borderRadius: 'lg',
      borderColor: 'border.base',
      bg: vars.bg.reference,
      [vars.bg.variable]: `white`,
      _dark: {
        [vars.bg.variable]: `gray.800`,
      },
      _hover: {
        borderColor: 'border.strong',
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: 'border.base',
        boxShadow: `0 0 0 1px ${props.theme.colors[props.colorScheme]}`,
        _dark: {
          borderColor: 'border.strong',
          boxShadow: `0 0 0 1px ${props.theme.colors[props.colorScheme]}`,
        },
      },
    },
    addon: {
      borderRadius: 'lg',
      borderColor: 'border.base',
      bg: 'bg.subtle',
    },
  })),

  'filled.accent': definePartsStyle({
    field: {
      bg: 'bg.accent.subtle',
      borderWidth: '2px',
      borderColor: 'border.base',
      borderRadius: 'lg',
      color: 'fg.accent.default',
      _placeholder: {
        color: 'fg.accent.subtle',
      },
      _hover: {
        borderColor: 'bg.accent.muted',
      },
      _focusVisible: {
        borderColor: 'brand.300',
      },
    },
  }),
}

const sizes = {
  sm: definePartsStyle({
    field: { px: 2.5, h: 9, fontSize: 'sm' },
  }),
  md: definePartsStyle({
    field: { px: 3, h: 10, fontSize: 'md' },
  }),
  lg: definePartsStyle({
    field: { px: 3.5, h: 11, fontSize: 'md' },
  }),
  xl: definePartsStyle({
    field: { px: 4, h: 12, fontSize: 'md' },
  }),
}

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    colorScheme: 'brand',
  },
})
