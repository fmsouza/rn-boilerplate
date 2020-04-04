import React, { useLayoutEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import { Container, Icon } from '~/shared/widgets';
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.rightHeaderContainer}>
          <Icon.Button name="plus" onPress={handleButtonTap} />
        </View>
      ),
    });
  }, [navigation, setCount, styles.rightHeaderContainer]);

  return (
    <Container style={styles.container}>
      <Text>Count: {count}</Text>
      <Button
        title={hello}
        onPress={handleNextPagePress}
        color={colors.accent}
      />
    </Container>
  );
};

HomeScreen.route = 'Home';

HomeScreen.options = () => ({
  title: 'Home',
});
