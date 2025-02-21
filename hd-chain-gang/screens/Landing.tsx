import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

function Landing() {
  return (
    <>
      <View style={styles.imgContainer}>
        <Image
          source={require('./../assets/looking_at_phone.jpg')}
          style={styles.lookingAtPhoneImg}
        />
      </View>
      <Text>Add your trip goals and remove them!</Text>
      <View style={styles.costsContainer}>
        <Text>Lorem ipsum</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  lookingAtPhoneImg: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    flex: 9,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  costsContainer: {
    flex: 1,
    marginTop: 20,
  }
});

export default Landing;
