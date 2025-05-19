import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, ProgressBar, Card, Avatar, Divider } from 'react-native-paper';
import MapView, { Marker, Polyline } from 'react-native-maps';

const DeliveryTracking = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your order is on the way</Text>

            {/* Map */}
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title={"Delivery Location"}
                />
                <Polyline
                    coordinates={[
                        { latitude: 37.78825, longitude: -122.4324 },
                        { latitude: 37.78925, longitude: -122.4314 },
                    ]}
                    strokeColor="#FF0000"
                    strokeWidth={3}
                />
            </MapView>

            {/* Info Section */}
            <View style={styles.infoContainer}>
                <Text>Estimated delivery time <Text style={{ fontWeight: 'bold' }}>12:30 PM</Text></Text>
                <ProgressBar progress={0.5} color="#000" style={styles.progressBar} />
                <Text style={{ marginTop: 5 }}>Driver: Arham Khan</Text>

                <Card style={styles.card}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Image size={60} source={{ uri: 'https://images.unsplash.com/photo-1606756791805-fc4ae9e09469' }} />
                        <View style={{ marginLeft: 15 }}>
                            <Text variant="titleMedium">McDonald's</Text>
                            <Text>Big Bomb Meal</Text>
                        </View>
                    </View>
                </Card>

                {/* Order Status */}
                <Text style={styles.statusTitle}>Order Status</Text>
                <View style={styles.statusItem}>
                    <View style={styles.statusDotActive} />
                    <Text style={styles.statusText}>Order placed</Text>
                </View>
                <View style={styles.statusItem}>
                    <View style={styles.statusDotActive} />
                    <Text style={styles.statusText}>Preparing</Text>
                </View>
                <View style={styles.statusItem}>
                    <View style={styles.statusDotActive} />
                    <Text style={styles.statusText}>Picked up</Text>
                </View>
                <View style={styles.statusItem}>
                    <View style={styles.statusDotActive} />
                    <Text style={styles.statusText}>On the way</Text>
                </View>
            </View>
        </View>
    );
};

export default DeliveryTracking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
    },
    heading: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    map: {
        height: 200,
        marginHorizontal: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    infoContainer: {
        paddingHorizontal: 15,
    },
    progressBar: {
        height: 6,
        borderRadius: 5,
        marginTop: 10,
    },
    card: {
        marginTop: 15,
        padding: 10,
    },
    statusTitle: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 16,
    },
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    statusDotActive: {
        width: 10,
        height: 10,
        backgroundColor: 'green',
        borderRadius: 5,
        marginRight: 10,
    },
    statusText: {
        fontSize: 14,
    },
});
