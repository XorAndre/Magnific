/* eslint-disable @typescript-eslint/camelcase */
import styled from 'styled-components';

type ButtonElementProps = {
  size: string;
  variant: string;
  width?: string;
  height?: string;
  tabbed?: boolean;
};

const colorSelect: any = {
  border_normal: {
    primary: (theme: any) => `1px solid ${theme.colors.weirBlue}`,
    secondary: (theme: any) => `1px solid ${theme.colors.stone}`,
    tertiary: () => '1px transparent',
  },
  border_hover: {
    primary: (theme: any) => `1px solid ${theme.colors.weirBlue}`,
    secondary: (theme: any) => `1px solid ${theme.colors.onyx}`,
    tertiary: () => `1px transparent`,
  },
  border_active: {
    primary: (theme: any) => `1px solid ${theme.colors.weirBlue}`,
    secondary: (theme: any) => `1px solid ${theme.colors.onyx}`,
    tertiary: () => `1px transparent`,
  },
  border_focus: {
    primary: (theme: any) => `1px dashed ${theme.colors.onyx}`,
    secondary: (theme: any) => `1px dashed ${theme.colors.onyx}`,
    tertiary: (theme: any) => `1px dashed ${theme.colors.onyx}`,
  },
  border_disabled: {
    primary: (theme: any) => `1px solid ${theme.colors.stone}`,
    secondary: (theme: any) => `1px solid ${theme.colors.stone}`,
    tertiary: () => `1px transparent`,
  },

  outline_focus: {
    primary: (theme: any) => `1px dashed ${theme.colors.white}`,
    secondary: () => `none`,
    tertiary: () => `none`,
  },
  outline_offset_focus: {
    primary: () => `-1px`,
    secondary: () => `none`,
    tertiary: () => `none`,
  },

  color_normal: {
    primary: (theme: any) => theme.colors.white,
    secondary: (theme: any) => theme.colors.slate,
    tertiary: (theme: any) => theme.colors.weirBlue,
  },
  color_hover: {
    primary: (theme: any) => theme.colors.white,
    secondary: (theme: any) => theme.colors.onyx,
    tertiary: (theme: any) => theme.colors.onyx,
  },
  color_active: {
    primary: (theme: any) => theme.colors.white,
    secondary: (theme: any) => theme.colors.onyx,
    tertiary: (theme: any) => theme.colors.onyx,
  },
  color_disabled: {
    primary: (theme: any) => theme.colors.white,
    secondary: (theme: any) => theme.colors.stone,
    tertiary: (theme: any) => theme.colors.stone,
  },

  bgcolor_normal: {
    primary: (theme: any) => theme.colors.weirBlue,
    secondary: (theme: any) => theme.colors.white,
    tertiary: (theme: any) => theme.colors.white,
  },
  bgcolor_hover: {
    primary: (theme: any) => theme.colors.weirBlueHighlight,
    secondary: (theme: any) => theme.colors.white,
    tertiary: (theme: any) => theme.colors.white,
  },
  bgcolor_active: {
    primary: (theme: any) => theme.colors.weirBlueHighlight,
    secondary: (theme: any) => theme.colors.dust,
    tertiary: (theme: any) => theme.colors.white,
  },
  bgcolor_disabled: {
    primary: (theme: any) => theme.colors.stone,
    secondary: (theme: any) => theme.colors.white,
    tertiary: (theme: any) => theme.colors.white,
  },
};

const sizeSelect: any = {
  button_height: {
    sm: '36px', // '2.25em', //
    md: '44px', // '2.75em', //
  },
  font: {
    sm: (theme: any) => theme.fontsize.pt14,
    md: (theme: any) => theme.fontsize.pt16,
  },
};

const ButtonWrapper = styled.button<ButtonElementProps>`
  cursor: pointer;
  height: ${({ size, height }) =>
    height ? height : sizeSelect.button_height[size]};
  min-width: ${({ width }) => (width ? width : '152px')};
  border-radius: 2px;

  border: ${({ theme, variant }) => colorSelect.border_normal[variant](theme)};
  &:hover {
    border: ${({ theme, variant }) => colorSelect.border_hover[variant](theme)};
  }
  &:focus {
    border: ${({ theme, variant }) => colorSelect.border_focus[variant](theme)};
    outline: ${({ theme, variant }) =>
      colorSelect.outline_focus[variant](theme)};
    outline-offset: ${({ variant }) =>
      colorSelect.outline_offset_focus[variant]()};
  }
  &:active {
    outline: none;
    outline-offset: none;
    border: ${({ theme, variant }) =>
      colorSelect.border_active[variant](theme)};
  }
  &:disabled {
    border: ${({ theme, variant }) =>
      colorSelect.border_disabled[variant](theme)};
  }

  color: ${({ theme, variant }) => colorSelect.color_normal[variant](theme)};
  &:hover {
    color: ${({ theme, variant }) => colorSelect.color_hover[variant](theme)};
  }
  &:focus {
    color: ${({ theme, variant }) => colorSelect.color_active[variant](theme)};
  }
  &:active {
    color: ${({ theme, variant }) => colorSelect.color_active[variant](theme)};
  }
  &:disabled {
    color: ${({ theme, variant }) =>
      colorSelect.color_disabled[variant](theme)};
  }

  & svg {
    fill: ${({ theme, variant }) => colorSelect.color_normal[variant](theme)};
  }
  &:hover svg {
    fill: ${({ theme, variant }) => colorSelect.color_hover[variant](theme)};
  }
  &:active svg {
    fill: ${({ theme, variant }) => colorSelect.color_active[variant](theme)};
  }
  &:disabled svg {
    fill: ${({ theme, variant }) => colorSelect.color_disabled[variant](theme)};
  }

  background-color: ${({ theme, variant }) =>
    colorSelect.bgcolor_normal[variant](theme)};
  &:hover {
    background-color: ${({ theme, variant }) =>
      colorSelect.bgcolor_hover[variant](theme)};
  }
  &:active {
    background-color: ${({ theme, variant }) =>
      colorSelect.bgcolor_active[variant](theme)};
  }
  &:disabled {
    background-color: ${({ theme, variant }) =>
      colorSelect.bgcolor_disabled[variant](theme)};
  }

  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: bold;
  font-size: ${({ theme, size }) => sizeSelect.font[size](theme)};
  letter-spacing: 0.03em;
`;

const TextWrapper = styled.div``;

export { ButtonWrapper, TextWrapper };
