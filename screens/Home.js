import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../assets/makkah.jpeg')}
        resizeMode="cover"
        style={styles.img}>
        <Text>home</Text>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default Home;
