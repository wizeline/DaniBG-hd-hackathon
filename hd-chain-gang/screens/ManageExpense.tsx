import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const products = [
    { id: '1', name: 'Bike HD Vintage', price: '$20', image: '' },
    { id: '2', name: 'Bike', price: '$35', image: '' },
    { id: '3', name: 'Jacket', price: '$50', image: '' },
    { id: '4', name: 'Boots', price: '$25', image: '' },
    { id: '5', name: 'Bike ', price: '$45', image: '' },
    { id: '6', name: 'Bandana', price: '$30', image: '' },
];

function ManageExpense() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const renderProduct = ({ item }) => (
      <TouchableOpacity style={styles.productCard} onPress={() => addToCart(item)}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
          <Text style={styles.title}>Virtual Shop</Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={renderProduct}
            numColumns={2}
            contentContainerStyle={styles.productList}
          />
          <Text style={styles.cartTitle}>Cart: {cart.length} items</Text>
      </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    productList: {
        justifyContent: 'space-between',
    },
    productCard: {
        flex: 1,
        backgroundColor: 'white',
        margin: 8,
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 8,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
    },
    cartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
});
