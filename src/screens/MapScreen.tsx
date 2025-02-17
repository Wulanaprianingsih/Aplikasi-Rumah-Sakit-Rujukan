import React from 'react';
import {StyleSheet, View} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import HeaderComponent from '../components/HeaderComponent';

const MapScreen = (props: any) => {
  const {params} = props?.route;

  const region = {
    latitude: params.coordinate.latitude,
    longitude: params.coordinate.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <View>
        <HeaderComponent showBack title={params.name} />
      </View>
      <MapView style={styles.map} initialRegion={region}>
        <Marker coordinate={region} />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
