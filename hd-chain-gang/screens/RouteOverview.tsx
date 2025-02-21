import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function RouteOverview() {
  return (
    <>
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title={'Start Location'}
          description={'This is the starting point'}
        />
      </MapView>
    </View>
      <View style={styles.costsContainer}>
        <Text>Costs of your adventure</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 7,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  costsContainer: {
    flex: 3,
    marginTop: 20,
  }
});

export default RouteOverview;
