import { DefaultTheme } from 'react-native-paper';
import color from 'color';

const primary = '#074F57';
const accent = '#D4C2FC';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary,
    accent,
  },
  statusBar: {
    barStyle: 'light-content',
    backgroundColor: color(primary).darken(0.4).hex().toString(),
  },
};
