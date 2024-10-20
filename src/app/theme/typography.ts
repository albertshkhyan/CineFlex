import { FontFamily, FontWeights } from '@app/types/theme/font.types';
import {
  LetterSpacings,
  LineHeights,
  TextVariant,
  Typography,
} from '@app/types/theme/typography.types';
import { Colors } from '@app/types/theme/colors.types';
import { breakpoints } from '@app/theme/breakpoints';

export const typography: Typography = {
  [TextVariant.H1]: {
    fontFamily: FontFamily.Garamond,
    fontSize: '36px',
    fontWeight: FontWeights.bold,
    color: Colors.lightGray,
    lineHeight: LineHeights.h1,
    letterSpacing: LetterSpacings.h1,
    [breakpoints.down('md')]: {
      fontSize: '32px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '28px',
    },
  },
  [TextVariant.H2]: {
    fontFamily: FontFamily.Garamond,
    fontSize: '32px',
    fontWeight: FontWeights.bold,
    color: Colors.lightGray,
    lineHeight: LineHeights.h2,
    letterSpacing: LetterSpacings.h2,
    [breakpoints.down('md')]: {
      fontSize: '28px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  [TextVariant.H3]: {
    fontFamily: FontFamily.Garamond,
    fontSize: '30px',
    fontWeight: FontWeights.regular,
    color: Colors.lightGray,
    lineHeight: LineHeights.h3,
    letterSpacing: LetterSpacings.h3,
    [breakpoints.down('md')]: {
      fontSize: '26px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '22px',
    },
  },
  [TextVariant.H4]: {
    fontFamily: FontFamily.Garamond,
    fontSize: '24px',
    fontWeight: FontWeights.regular,
    color: Colors.white,
    lineHeight: LineHeights.h4,
    letterSpacing: LetterSpacings.h4,
    [breakpoints.down('md')]: {
      fontSize: '22px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  [TextVariant.H5]: {
    fontFamily: FontFamily.Garamond,
    fontSize: '20px',
    fontWeight: FontWeights.regular,
    lineHeight: LineHeights.h5,
    letterSpacing: LetterSpacings.h5,
    color: Colors.white,
    [breakpoints.down('md')]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '16px',
      lineHeight: '22px',
    },
  },
  [TextVariant.H6]: {
    fontFamily: FontFamily.Garamond,
    fontSize: '18px',
    fontWeight: FontWeights.regular,
    lineHeight: LineHeights.h6,
    letterSpacing: LetterSpacings.h6,
    color: Colors.white,
    [breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '22px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  [TextVariant.Subtitle1]: {
    fontFamily: FontFamily.Tajawal,
    fontSize: '20px',
    fontWeight: FontWeights.medium,
    lineHeight: LineHeights.subtitle1,
    letterSpacing: LetterSpacings.subtitle1,
    color: Colors.gray,
    [breakpoints.down('md')]: {
      fontSize: '18px',
      lineHeight: '26px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  [TextVariant.Subtitle2]: {
    fontFamily: FontFamily.Tajawal,
    fontSize: '18px',
    fontWeight: FontWeights.light,
    lineHeight: LineHeights.subtitle2,
    letterSpacing: LetterSpacings.subtitle2,
    color: Colors.gray,
    [breakpoints.down('md')]: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '14px',
      lineHeight: '22px',
    },
  },
  [TextVariant.Body]: {
    fontFamily: FontFamily.Tajawal,
    fontSize: '16px',
    fontWeight: FontWeights.regular,
    lineHeight: LineHeights.body,
    letterSpacing: LetterSpacings.body,
    color: Colors.white,
    [breakpoints.down('md')]: {
      fontSize: '14px',
      lineHeight: '22px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '12px',
      lineHeight: '20px',
    },
  },
  [TextVariant.Caption]: {
    fontFamily: FontFamily.Tajawal,
    fontSize: '14px',
    fontWeight: FontWeights.light,
    lineHeight: LineHeights.caption,
    letterSpacing: LetterSpacings.caption,
    color: Colors.gray,
    [breakpoints.down('md')]: {
      fontSize: '12px',
      lineHeight: '18px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '10px',
      lineHeight: '16px',
    },
  },

  [TextVariant.Button]: {
    fontFamily: FontFamily.Tajawal,
    fontSize: '16px',
    fontWeight: FontWeights.bold,
    color: Colors.white,
    lineHeight: LineHeights.button,
    letterSpacing: LetterSpacings.button,
    [breakpoints.down('md')]: {
      fontSize: '14px',
    },
    [breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
};
