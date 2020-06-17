import React from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import MealItem from './MealItem';
import MealModel from '../models/meal.model';

const MealList = (props: any) => {
    
    const renderMealItem = (itemData: any) => {
        const mealItem = itemData.item as MealModel;
        return (
            <MealItem 
                onSelectMeal={() => {
                    
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params:{
                            mealId: mealItem.id
                        }
                    });
                }}
                item={mealItem}
            />
        )
    };
    
    return (
        <View style={styles.list}>
            <Text>Category Meals Screen!</Text>
            <FlatList 
                data={props.listData} 
                keyExtractor={(item,index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
                />
            <Button title="Go to meal details" onPress={()=>{
                props.navigation.navigate('MealDetail');        
            }} />
        </View>
    )    
}

const styles = StyleSheet.create({
    list:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default MealList;

