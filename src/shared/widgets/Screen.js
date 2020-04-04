import React from 'react';
import { SafeAreaView, View } from 'react-native';
import PropTypes from 'prop-types';
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

export const Screen = ({
  title,
  subtitle,
  appBarActions,
  hideAppBar,
  children,
}) => {
  const styles = useStyles();
  const navigation = useNavigation();

  const handleBackButton = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      {!hideAppBar && (
        <View style={styles.header}>
          <Appbar.Header>
            {navigation.isFocused() && navigation.canGoBack() && (
              <Appbar.BackAction onPress={handleBackButton} />
            )}
            <Appbar.Content title={title} subtitle={subtitle} />
            {appBarActions.map(({ id, ...action }) => (
              <Appbar.Action key={id} {...action} />
            ))}
          </Appbar.Header>
        </View>
      )}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

Screen.propTypes = {
  appBarActions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string,
      onPress: PropTypes.func.isRequired,
    }),
  ),
  hideAppBar: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Screen.defaultProps = {
  appBarActions: [],
  hideAppBar: false,
  title: null,
  subtitle: null,
};
