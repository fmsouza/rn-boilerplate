import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import { Container, Screen } from '~/shared/widgets';
import { makeStyles } from '~/shared/styles';

import { useHome } from '~/home/state';

import { SecondScreen } from './SecondScreen';

const useStyles = makeStyles((theme) => ({
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
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const { hello } = useHome();

  const handleButtonTap = () => {
    setCount((c) => c + 1);
  };

  const handleNextPagePress = () => {
    navigation.navigate(SecondScreen.route);
  };

  const actions = [{ id: 'add', icon: 'plus', onPress: handleButtonTap }];

  return (
    <Screen title="Home" appBarActions={actions}>
      <Container style={styles.container}>
        <Text>Count: {count}</Text>
        <Button
          children={hello}
          onPress={handleNextPagePress}
          color={colors.accent}
        />
      </Container>
    </Screen>
  );
};

HomeScreen.route = 'Home';

HomeScreen.options = () => ({
  title: 'Home',
});
