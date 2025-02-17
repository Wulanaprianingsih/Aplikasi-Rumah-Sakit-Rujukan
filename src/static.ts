const provinceCoordinates: Record<
  string,
  {latitude: number; longitude: number}
> = {
  Aceh: {latitude: 4.698178573085191, longitude: 96.74450917162703},
  'Sumatera Utara': {
    latitude: 2.1090855383414078,
    longitude: 99.56628025980466,
  },
  'Sumatera Barat': {
    latitude: -0.704820263695986,
    longitude: 100.76398839912252,
  },
  Riau: {latitude: 0.2988799721902288, longitude: 101.7759432343752},
  'Kepulauan Riau': {latitude: 3.9457, longitude: 108.1429},
  Jambi: {latitude: -1.6101, longitude: 103.6131},
  'Sumatera Selatan': {latitude: -3.3194, longitude: 104.9147},
  'Bangka Belitung': {latitude: -2.741, longitude: 106.4406},
  Bengkulu: {latitude: -3.7928, longitude: 102.26},
  Lampung: {latitude: -4.5586, longitude: 105.4068},
  'DKI Jakarta': {latitude: -6.2088, longitude: 106.8456},
  Banten: {latitude: -6.4058, longitude: 106.064},
  'Jawa Barat': {latitude: -6.8892, longitude: 107.6405},
  'Jawa Tengah': {latitude: -7.1509, longitude: 110.1403},
  'DI Yogyakarta': {latitude: -7.7956, longitude: 110.3695},
  'Jawa Timur': {latitude: -7.2504, longitude: 112.7688},
  Bali: {latitude: -8.4095, longitude: 115.1889},
  'Nusa Tenggara Barat': {latitude: -8.6529, longitude: 117.3616},
  'Nusa Tenggara Timur': {latitude: -9.1429, longitude: 124.9532},
  'Kalimantan Barat': {latitude: -0.385, longitude: 111.5028},
  'Kalimantan Tengah': {latitude: -1.6815, longitude: 113.3824},
  'Kalimantan Selatan': {latitude: -3.0926, longitude: 115.2838},
  'Kalimantan Timur': {latitude: 0.5387, longitude: 116.4194},
  'Kalimantan Utara': {latitude: 3.2581, longitude: 116.0526},
  'Sulawesi Utara': {latitude: 1.38, longitude: 124.8353},
  Gorontalo: {latitude: 0.6994, longitude: 122.4467},
  'Sulawesi Tengah': {latitude: -1.43, longitude: 121.4456},
  'Sulawesi Barat': {latitude: -2.8449, longitude: 119.2321},
  'Sulawesi Selatan': {latitude: -3.6688, longitude: 119.9741},
  'Sulawesi Tenggara': {latitude: -4.1449, longitude: 122.1746},
  Maluku: {latitude: -3.2385, longitude: 130.1453},
  'Maluku Utara': {latitude: 1.57, longitude: 127.8082},
  Papua: {latitude: -4.2699, longitude: 138.0804},
  'Papua Barat': {latitude: -1.3361, longitude: 133.1747},
  'Papua Tengah': {latitude: -3.98, longitude: 136.0831},
  'Papua Pegunungan': {latitude: -3.75, longitude: 138.5},
  'Papua Selatan': {latitude: -7.58, longitude: 139.5},
  'Papua Barat Daya': {latitude: -1.11, longitude: 132.25},
};

export const getCoordinate = (province: string) => {
  return provinceCoordinates[province] || null;
};

export type ItemData = {
  address: string;
  name: string;
  phone: string;
  province: string;
  region: string;
  img?: any;
};
export const hospitalImgs = [
  'https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWwlMjBpbmRvbmVzaWF8ZW58MHx8MHx8fDI%3D',
  'https://images.unsplash.com/photo-1664036362129-ca6c57599633?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBpbmRvbmVzaWF8ZW58MHx8MHx8fDI%3D',
  'https://images.unsplash.com/photo-1601841197690-6f0838bdb005?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWwlMjBpbmRvbmVzaWF8ZW58MHx8MHx8fDI%3D',
  'https://images.unsplash.com/photo-1629362018525-11fce8a183f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWwlMjBpbmRvbmVzaWF8ZW58MHx8MHx8fDI%3D',
  'https://images.unsplash.com/photo-1601841162542-956af38ba052?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9zcGl0YWwlMjBpbmRvbmVzaWF8ZW58MHx8MHx8fDI%3D',
  'https://images.unsplash.com/photo-1630128281142-abf11ea2affe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3BpdGFsJTIwaW5kb25lc2lhfGVufDB8fDB8fHwy',
  'https://images.unsplash.com/photo-1630331619092-3568b4b14402?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3BpdGFsJTIwaW5kb25lc2lhfGVufDB8fDB8fHwy',
  'https://images.unsplash.com/photo-1706065264583-55f1a8549769?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvc3BpdGFsJTIwaW5kb25lc2lhfGVufDB8fDB8fHwy',
  'https://images.unsplash.com/photo-1614101062781-09a8dfb90dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODN8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MDk4Nzl8\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=1080',
  'https://images.unsplash.com/photo-1640876777012-bdb00a6323e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODR8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1530299297082-0846efbd2cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODN8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1457257495536-67f31bc9773d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODN8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODR8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1600851555921-d280ba3f019a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODR8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1594067603478-4d35f080c9a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODR8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1586534738560-438efdf1d205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODR8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODR8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1583966475011-c477650c83e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODR8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzNTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzk3MTA3ODR8&ixlib=rb-4.0.3&q=80&w=1080',
];
