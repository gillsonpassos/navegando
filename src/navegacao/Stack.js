import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from "../components/TelaA";
import TelaB from "../components/TelaB";
import TelaC from "../components/TelaC";
import PassoStack from "../components/PassoStack";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name='TelaA'
            options={{ title: 'Informações Iniciais' }}>
            {props => (
                <PassoStack {...props} avancar='TelaB'>
                    <TelaA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name='TelaB'>
            {props => (
                <PassoStack {...props} voltar avancar='TelaC'
                    avancarParams={{ numero: 1007 }}>
                    <TelaB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name='TelaC'>
            {props => (
                <PassoStack {...props} voltar avancar='TelaC'>
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)