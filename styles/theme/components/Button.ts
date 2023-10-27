import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    height: '36px',
    fontWeight: 'bold',
    borderRadius: '100px',
    padding: '0px 24px',
    gap: '8px',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },
  variants: {
    solid: {
      bg: 'rgba(255, 255, 255, 0.15)',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});
