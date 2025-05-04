import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardTwo = () => (
    <View style={{ padding: 10 }}>
        <Card>
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover style={{ padding: 5 }} source={{ uri: 'https://picsum.photos/400' }} />
            <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
            </Card.Actions>
        </Card>
    </View>
);

export default CardTwo;