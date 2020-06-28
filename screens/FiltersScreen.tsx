import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import {setFilters} from '../store/actions/meals.actions';

const FiltersScreen = (props:any) => {

    const {navigation} = props;

    const FilterSwitch = (props: any) => {
        return (<View style={styles.filtersContainer}>
            <Text>{props.label}</Text>
                <Switch 
                    trackColor={{false: '#fff', true: Colors.primary} }
                    thumbColor={'gray'}
                    value={props.value} 
                    onValueChange={val => props.onChange(val)} />
            </View>)
    }
    
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isLactoFree, setIsLactoFree] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    
    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        console.log('save filters');

        const appliedFilters = {
            glutenFree: isGlutenFree,
            vegan: isVegan,
            lactoseFree: isLactoFree,
            vegetarian: isVegetarian
        }

        dispatch(setFilters(appliedFilters));

    }, [isGlutenFree, isLactoFree, isVegan, isVegetarian, dispatch])
    
    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);
    
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch 
                label={'Vegan'}
                value={isVegan}
                onChange={(newValue:boolean) => {setIsVegan(newValue);}}
            />
            <FilterSwitch 
                label={'Gluten Free'}
                value={isGlutenFree}
                onChange={(newValue:boolean) => {setIsGlutenFree(newValue);}}
            />
            <FilterSwitch 
                label={'Lactose Free'}
                value={isLactoFree}
                onChange={(newValue:boolean) => {setIsLactoFree(newValue);}}
            /> 
            <FilterSwitch 
                label={'Vegetarian'}
                value={isVegetarian}
                onChange={(newValue:boolean) => {setIsVegetarian(newValue);}}
            />                            
        </View>        
    )
};

FiltersScreen.navigationOptions = (navData: any) => {
    const save = navData.navigation.getParam('save');

    return {
        headerTitle: 'Favorite Meals',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item 
                title="Menu" 
                iconName="ios-menu" 
                onPress={()=>{ navData.navigation.toggleDrawer();}}>
            </Item>
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item 
                title="Save" 
                iconName="ios-save" 
                onPress={()=>{ save() }}>
            </Item>
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        alignItems: 'center'
    },
    filtersContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        margin: 15

    },
    title:{
        textTransform: 'uppercase',
        paddingVertical: 10
    }
});

export default FiltersScreen;