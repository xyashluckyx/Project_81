import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'; 
import Profile from '../screens/Profile';
import BottomTabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;