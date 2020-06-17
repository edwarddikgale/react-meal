import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CategoryModel from '../models/CategoryModel';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = (props:any) => {
    const renderGridItem = (itemData:any) => {
        return (
            <CategoryGridTile 
                item={itemData.item}
                onSelect={ () => {
                    props.navigation.navigate({
                        routeName:'CategoryMeals',
                        params:{
                            categoryId: itemData.item.id
                        }
                    })
                }}
            />
        );
    }
    return (
        <FlatList 
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES} 
            numColumns={2} 
            renderItem={renderGridItem} />
    )
};

CategoriesScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item 
                title="Menu" 
                iconName="ios-menu" 
                onPress={()=>{ navData.navigation.toggleDrawer();}}>
            </Item>
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;