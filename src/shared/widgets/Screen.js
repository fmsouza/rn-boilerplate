import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';

import { makeStyles } from '~/shared/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flex: 1,
  },
  content: {
    flex: 1,
  },
}));

export const Screen = ({ title, subtitle, hideAppBar, children }) => {
  const styles = useStyles();
  const navigation = useNavigation();

  const handleBackButton = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      {!hideAppBar && (
        <View style={styles.header}>
          <Appbar.Header>
            {navigation.canGoBack() && (
              <Appbar.BackAction onPress={handleBackButton} />
            )}
            <Appbar.Content title={title} subtitle={subtitle} />
          </Appbar.Header>
        </View>
      )}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};
