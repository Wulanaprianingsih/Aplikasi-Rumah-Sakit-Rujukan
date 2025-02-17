/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../colors';
import {responsiveSize} from '../utils/ResponsiveSize';

const SplashScreen = ({navigation}: any) => {
  React.useEffect(() => {
    // redirect to home after 1000ms
    const navigateTimeout = setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);

    return () => {
      clearTimeout(navigateTimeout);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Rumah Sakit</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 78,
    height: 78,
  },
  title: {
    color: colors.main,
    fontSize: responsiveSize(20),
    lineHeight: 30,
    fontFamily: 'Poppins-Bold',
  },
});
