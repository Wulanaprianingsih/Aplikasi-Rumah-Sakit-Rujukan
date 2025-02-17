/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import SearchBox from '../components/SearchBox';
import CardComponent from '../components/CardComponent';
import axios from 'axios';
import {getData, storeData} from '../utils/asyncStorage';
import {hospitalImgs, ItemData} from '../static';

const HomeScreen = () => {
  const [hospitals, setHospitals] = useState([]);
  const [filteredHospital, setFilteredHospital] = useState([]);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    // fetch hospitals api
    const fetch = async () => {
      const {data} = await axios.get(
        'https://dekontaminasi.com/api/id/covid19/hospitals',
      );

      // modify data add to add image
      const newData = data.map((hospital: ItemData) => ({
        ...hospital,
        img: hospitalImgs[Math.floor(Math.random() * hospitalImgs.length)],
      }));

      // storeData to localStorage/asyncStorage
      await storeData('hospital', newData);
      setHospitals(newData);
      setFilteredHospital(newData);
    };

    fetch().catch(() => {});

    // getData from localStorage
    const getPersistData = async () => {
      const storedHospital = await getData('hospital');
      setHospitals(storedHospital);
      setFilteredHospital(storedHospital);
    };

    getPersistData();
  }, []);

  // search function
  useEffect(() => {
    if (keyword.trim().length === 0) {
      setFilteredHospital(hospitals);
    }
    const results = hospitals.filter(
      (x: ItemData) =>
        x.name.toLowerCase().includes(keyword.toLowerCase()) ||
        x.address.toLowerCase().includes(keyword.toLowerCase()),
    );

    setFilteredHospital(results);
  }, [keyword]);

  return (
    <View>
      <HeaderComponent
        title="Daftar Rumah Sakit Rujukan"
        showBack={false}
        height={58}
      />
      <SearchBox value={keyword} onChange={(e: any) => setKeyword(e)} />
      <View style={styles.pb}>
        <FlatList
          renderItem={({item}) => <CardComponent item={item} />}
          data={filteredHospital}
          keyExtractor={(item: ItemData) => item.name}
          style={styles.flatList}
          contentContainerStyle={styles.pb}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flatList: {marginVertical: 13, paddingHorizontal: 22},
  pb: {
    paddingBottom: 100,
  },
});
