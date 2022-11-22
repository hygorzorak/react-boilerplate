import type { ComponentStyleConfig } from '@chakra-ui/theme';

import typography from '../../foundations/typography';

export const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontFamily: typography.font.family.body,
    fontWeight: typography.font.weight.semibold,
    lineHeight: typography.font.lineHeight.component,
  },
  sizes: {
    '4xl': {
      fontSize: typography.font.size['11'],
    },
    '3xl': {
      fontSize: typography.font.size['10'],
    },
    '2xl': {
      fontSize: typography.font.size['9'],
    },
    xl: {
      fontSize: typography.font.size['8'],
    },
    lg: {
      fontSize: typography.font.size['7'],
    },
    md: {
      fontSize: typography.font.size['6'],
    },
    sm: {
      fontSize: typography.font.size['5'],
    },
  },
  defaultProps: {
    size: 'md',
  },
};
