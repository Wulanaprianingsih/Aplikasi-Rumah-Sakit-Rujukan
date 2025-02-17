import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../colors';
import {responsiveSize} from '../utils/ResponsiveSize';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface HeaderComponentProps {
  title: string;
  showBack?: boolean;
  height?: number;
  titleStyle?: StyleProp<TextStyle>;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  title,
  showBack,
  height = 58,
  titleStyle = styles.title,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const convertLabel = () => {
    return title.length > 37 && showBack
      ? title.substring(0, 37) + '...'
      : title;
  };
  return (
    <View
      style={[
        styles.container,
        {height: height, justifyContent: !showBack ? 'center' : 'flex-start'},
      ]}>
      {showBack && (
        <TouchableOpacity onPressIn={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/back.png')}
            style={styles.back}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
      <Text style={titleStyle}>{convertLabel()}</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.main,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 22,
  },
  title: {
    color: colors.text,
    fontSize: responsiveSize(14),
    lineHeight: 21,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 13,
  },
  back: {width: 23, height: 20},
});
