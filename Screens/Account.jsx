import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Text, List, Divider, Surface, useTheme, Caption } from 'react-native-paper';

const Account = () => {
    const theme = useTheme();

    const user = {
        image: 'https://i.pravatar.cc/150?img=10',
        username: 'anaintay',
        name: 'Muhammad Hasnain',
        phone: '(123) 456-7890',
        birthday: 'May 6th, 1996',
        country: 'United States',
        email: 'john@example.com',
    };

    const socialAccounts = [
        { name: 'Apple', status: 'Connected', color: 'green' },
        { name: 'Discord', status: 'Connected', color: 'green' },
        { name: 'Facebook', status: 'Needs Verification', color: 'red' },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Profile Picture */}
            <View style={styles.header}>
                <Avatar.Image size={80} source={{ uri: user.image }} />
                <Text style={styles.username}>{user.username}</Text>
            </View>

            {/* Personal Information */}
            <Section title="Personal Information">
                <InfoItem label="Username" value={user.username} />
                <InfoItem label="Name" value={user.name} />
                <InfoItem label="Phone" value={user.phone} />
                <InfoItem label="Birthday" value={user.birthday} />
                <InfoItem label="Country" value={user.country} />
            </Section>

            {/* Login Info */}
            <Section title="Login Information">
                <InfoItem label="Email" value={user.email} />
                <InfoItem label="Update Password" value="********" />
            </Section>

            {/* Social Accounts */}
            <Section title="Social Accounts">
                {socialAccounts.map((acc, index) => (
                    <View key={index} style={styles.socialRow}>
                        <Text style={styles.socialLabel}>{acc.name}</Text>
                        <Caption style={{ color: acc.color }}>{acc.status}</Caption>
                    </View>
                ))}
            </Section>
        </ScrollView>
    );
};

// Subcomponents
const Section = ({ title, children }) => (
    <Surface style={styles.section}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Divider style={{ marginVertical: 6 }} />
        {children}
    </Surface>
);

const InfoItem = ({ label, value }) => (
    <List.Item
        title={label}
        description={value}
        right={() => <List.Icon icon="chevron-right" />}
    />
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f9fb',
        padding: 10,
    },
    header: {
        alignItems: 'center',
        marginVertical: 20,
    },
    username: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    section: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 2,
    },
    sectionTitle: {
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 4,
    },
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 4,
    },
    socialLabel: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default Account;
