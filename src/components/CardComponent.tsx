import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {colors} from '../../colors';
import HeaderComponent from './HeaderComponent';
import {responsiveSize} from '../utils/ResponsiveSize';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {getCoordinate, ItemData} from '../static';

interface LabelComponentProps {
  img: ImageSourcePropType;
  label: string;
}

const LabelComponent: React.FC<LabelComponentProps> = ({img, label}) => {
  return (
    <View style={styles.labelContainer}>
      <Image source={img} style={styles.imgContent} resizeMode="contain" />
      <Text style={styles.label}>{label}:</Text>
    </View>
  );
};
// Component for render hospital information
const CardComponent = ({item}: {item: ItemData}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <HeaderComponent
        title={item.name}
        titleStyle={styles.title}
        height={29}
      />

      <View style={styles.contentContainer}>
        {item.img ? (
          <Image
            source={{uri: item.img}}
            style={styles.img}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.img}
            resizeMode="contain"
          />
        )}
        <View>
          <LabelComponent
            img={require('../assets/images/gps.png')}
            label="Alamat"
          />
          <Text style={styles.subLabel}>{item.address}</Text>
          <LabelComponent
            img={require('../assets/images/telephone.png')}
            label="Telepon"
          />
          <Text style={styles.subLabel}>{item.phone}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          // redirect to Maps Screen with name & coordinate as params
          const coordinate = getCoordinate(item.province);
          navigation.navigate('Maps', {
            name: item.name,
            coordinate: coordinate,
          });
        }}>
        <View style={styles.btnContentContainer}>
          <Image
            source={require('../assets/images/maps.png')}
            style={styles.imgContent}
            resizeMode="contain"
          />
          <Text style={styles.maps}>Maps</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardComponent;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.text,
    minHeight: 138,
    marginBottom: 13,
    alignSelf: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,

    elevation: 2,
  },
  title: {
    fontSize: responsiveSize(9),
    fontFamily: 'Poppins-Regular',
    color: colors.text,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 16,
    width: '100%',
  },
  img: {width: 141, height: 64},
  labelContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  label: {
    fontSize: responsiveSize(8),
    fontFamily: 'Poppins-Medium',
    color: colors.black,
  },
  subLabel: {
    fontSize: responsiveSize(8),
    fontFamily: 'Poppins-Regular',
    color: colors.black,
    flexWrap: 'wrap',
    width: 165,
    marginBottom: 8,
  },
  btn: {
    backgroundColor: colors.main,
    width: 61,
    height: 16,
    borderRadius: 30,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 13,
    right: 12,
  },
  btnContentContainer: {display: 'flex', flexDirection: 'row', gap: 4},
  maps: {
    fontSize: responsiveSize(8),
    color: colors.text,
  },
  imgContent: {
    width: 10,
    height: 10,
  },
});
