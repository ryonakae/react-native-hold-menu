import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HoldItem } from "../../../react-native-hold-menu";

interface SampleItemProps { }

const SampleItem = ({ }: SampleItemProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text>😒</Text>
            </View>
            <HoldItem id="item">
                <View style={styles.item}>
                    <Text style={{ color: 'white' }}>Hold Me! 🙋🏻‍♂️</Text>
                </View>
            </HoldItem>
            <View style={styles.item}>
                <Text>😒</Text>
            </View>
            <HoldItem id="item">
                <View style={styles.item}>
                    <Text style={{ color: 'white' }}>Hold Me! 🙋🏻‍♂️</Text>
                </View>
            </HoldItem>
        </View>
    );
};

export default SampleItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e2e2e2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    item: {
        width: 120,
        height: 120,
        backgroundColor: 'rgb(86, 90, 241)',
        borderRadius: 24,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});