import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export const makeStyles = (fn) => () => {
  const theme = useTheme();
  return StyleSheet.create(fn(theme));
};
