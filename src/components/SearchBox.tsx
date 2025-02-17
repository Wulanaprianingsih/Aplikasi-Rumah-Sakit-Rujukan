import {View, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '../../colors';
import {responsiveSize} from '../utils/ResponsiveSize';

interface SearchBoxProps {
  value: string;
  onChange?: (text: string) => void;
}
const SearchBox: React.FC<SearchBoxProps> = ({value, onChange}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Cari rumah sakit/alamat"
          style={styles.search}
          placeholderTextColor={colors.text}
          value={value}
          onChangeText={onChange}
        />
        <Image
          source={require('../assets/images/search.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default SearchBox;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    height: 51,
    paddingHorizontal: 24,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  searchBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.text,
    height: 36,
    width: '100%',
    borderRadius: 30,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  search: {
    fontSize: 12,
    color: colors.text,
    width: '80%',
  },
  title: {
    color: colors.text,
    fontSize: responsiveSize(14),
    lineHeight: 21,
    fontFamily: 'Poppins-SemiBold',
  },
  img: {
    width: 20,
    height: 20,
  },
});
