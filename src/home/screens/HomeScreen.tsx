import React, { useState } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button, Container, IconButton } from '~/shared/components';
import { makeStyles, Theme } from '~/shared/styles';
import { useNavigationOptions } from '~/shared/navigation';

import { SecondScreen } from './SecondScreen';

const useStyles = makeStyles((_: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  rightHeaderContainer: {
    marginRight: 10,
  },
}));

export const HomeScreen = () => {
  const styles = useStyles();
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  useNavigationOptions({
    headerRight: () => (
      <IconButton name="plus" color="white" onPress={handleButtonTap} />
    ),
  });

  const handleButtonTap = () => {
    setCount(c => c + 1);
  };

  const handleNextPagePress = () => {
    navigation.navigate(SecondScreen.route as any);
  };

  return (
    <Container style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="hello" onPress={handleNextPagePress} />
    </Container>
  );
};

HomeScreen.route = 'Home';

HomeScreen.options = {
  title: 'Home page',
};