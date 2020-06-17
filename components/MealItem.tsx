import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

const MealItem = (props:any) => {
    
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow,...styles.mealHeader}}>
                        <ImageBackground 
                            source={{uri: props.item.imageUrl}}
                            style={styles.imageBg}
                            >
                            <Text style={styles.mealTitle}>{props.item.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow,...styles.mealDetails}}>
                        <Text style={props.styles?.addStyle}>{props.item.duration} min</Text>
                        <Text style={props.styles?.addStyle}>{props.item.complexity}</Text>
                        <Text style={props.styles?.addStyle}>{props.item.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    imageBg:{
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'  
    },
    mealRow:{
        flexDirection: 'row'
    },
    mealItem:{
        height: 200,
        width: '100%',
        backgroundColor: '#F5F5F5',
        overflow: 'hidden'
    },
    mealHeader:{
        height: '85%'
    },
    mealDetails:{
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    },
    mealTitleContainer:{

    },
    mealTitle:{
        fontSize: 16,
        color: 'white',
        fontFamily:'open-sans-bold',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5
    }
});

export default MealItem;