export const defaultTheme = {
  colors: {
    primary: '#242424',
    secondary: '#f5f5dc',
    tertiary: '#7379FF',
    warning: '#ff7979',
    text: '#fff',
    secondaryText: '#222',
    stateActive: '#98FB98',
    stateArchived: '#FFE5B4',
    lighterBackground: '#444',
  },
  fontSizes: {
    large: '40px',
    normal: '20px',
    small: '15px',
  },
};

export type ThemeColor = keyof typeof defaultTheme.colors;
export type FontSize = keyof typeof defaultTheme.fontSizes;
