import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryGridTile = (props:any) => {
    return (
        <TouchableOpacity 
            style={styles.gridItem} 
            onPress={props.onSelect}>
            <View style={{...styles.container, ...{backgroundColor: props.item.color}}}>
                <Text style={styles.title}>{props.item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'gray',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        overflow: "hidden",
        elevation: 5,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    gridItem:{
        flex: 1,
        margin: 13,
        height: 95
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize: 12,
        letterSpacing: 5
    }
});

export default CategoryGridTile;
