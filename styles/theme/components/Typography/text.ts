import type { ComponentMultiStyleConfig } from '@chakra-ui/theme';

import typography from '../../foundations/typography';

export const Text: ComponentMultiStyleConfig = {
  parts: ['body', 'label', 'display', 'detail'],
  baseStyle: {
    body: {
      fontFamily: typography.font.family.body,
      fontWeight: typography.font.weight.regular,
      lineHeight: typography.font.lineHeight.body,
      textTransform: typography.font.textTransform.none,
      display: 'inline',
    },
    detail: {
      fontFamily: typography.font.family.body,
      fontWeight: typography.font.weight.medium,
      lineHeight: typography.font.lineHeight.component,
      textTransform: typography.font.textTransform.upper,
      display: 'inline',
    },
    label: {
      fontFamily: typography.font.family.body,
      fontWeight: typography.font.weight.medium,
      lineHeight: typography.font.lineHeight.component,
      textTransform: typography.font.textTransform.none,
      display: 'inline',
    },
  },
  sizes: {
    xl: {
      label: {
        fontSize: typography.font.size['6'],
      },
    },
    lg: {
      body: {
        fontSize: typography.font.size['7'],
      },
      label: {
        fontSize: typography.font.size['5'],
      },
    },
    md: {
      body: {
        fontSize: typography.font.size['5'],
      },
      label: {
        fontSize: typography.font.size['4'],
      },
      detail: {
        fontSize: typography.font.size['3'],
      },
    },
    sm: {
      body: {
        fontSize: typography.font.size['3'],
      },
      detail: {
        fontSize: typography.font.size['2'],
      },
      label: {
        fontSize: typography.font.size['3'],
      },
    },
    xs: {
      body: {
        fontSize: typography.font.size['2'],
      },
      label: {
        fontSize: typography.font.size['2'],
      },
    },
  },
  variants: {
    bold: {
      body: {
        fontWeight: typography.font.weight.bold,
      },
    },
    semibold: {
      body: {
        fontWeight: typography.font.weight.semibold,
      },
    },
    medium: {
      body: {
        fontWeight: typography.font.weight.medium,
      },
    },
    regular: {
      body: {
        fontWeight: typography.font.weight.regular,
      },
    },
  },
  defaultProps: {
    size: 'md',
  },
};
