import * as React from 'react';
import { Page, View, Frame, StyleSheet } from 'react-figma';

const styles = StyleSheet.create({
    line: {
        flexDirection: ("row" as any)
    },
    rect: {
        width: 150,
        height: 100
    }
});

export const App = () => {
    return (
        <Page isCurrent name="Logo page">
            <Frame name="Logo">
                <View name="Line 1" style={styles.line}>
                    <View name="1.1" style={([styles.rect, { backgroundColor: '#f24e1e' }] as any)} />
                    <View name="1.2" style={([styles.rect, { backgroundColor: '#ff7262' }] as any)} />
                </View>
                <View name="Line 2" style={styles.line}>
                    <View name="2.1" style={([styles.rect, { backgroundColor: '#a259ff' }] as any)} />
                    <View name="2.2" style={([styles.rect, { backgroundColor: '#1abcfe' }] as any)} />
                </View>
                <View name="Line 3" style={styles.line}>
                    <View name="3.1" style={([styles.rect, { backgroundColor: '#0acf83' }] as any)} />
                </View>
            </Frame>
        </Page>
    );
};
