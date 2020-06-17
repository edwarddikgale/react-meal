import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = (props:any) => {
    return (
        <View style={styles.screen}>
            <Text>Favourites screen</Text>
        </View>        
    )
};


FavoritesScreen.navigationOptions = (navData: any) => {
    return {
        headerTitle: 'Favorite Meals',
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

export default FavoritesScreen;