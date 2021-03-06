import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';

import { makeStyles } from '~/shared/styles';
import { Container, Screen } from '~/shared/widgets';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const SecondScreen = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Screen title="Second screen" subtitle="Very nice!">
      <Container style={styles.container}>
        <Text>Congratulations! You navigated to the second screen!</Text>
        <Button mode="contained" icon="chevron-left" onPress={handleBackPress}>
          Go back
        </Button>
      </Container>
    </Screen>
  );
};

SecondScreen.route = 'Second';
