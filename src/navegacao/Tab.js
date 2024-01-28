import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from "../components/TelaA";
import TelaB from "../components/TelaB";
import TelaC from "../components/TelaC";

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: { fontSize: 30 }
    }} >
        <Tab.Screen name='TelaA' component={TelaA} />
        <Tab.Screen name='TelaB' component={TelaB} />
        <Tab.Screen name='TelaC' component={TelaC} />
    </Tab.Navigator>
)