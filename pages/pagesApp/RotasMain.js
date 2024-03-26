import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import alterarDiario from './alterarDiario';
import cadastrarDiario from './cadastrarDiario';

const Stack = createStackNavigator();

export default function RotasMain() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initicialRoute="Home">
            <Stack.Screen name="cadastrarDiario" component={cadastrarDiario}  options={{headerTintColor: '#9ac234', title: 'Cadastro do dia'}}    />
            <Stack.Screen name="Acesso"          component={alterarDiario}    options={{headerTintColor: '#9ac234', title: 'Alterar registros'}}/>
            <Stack.Screen name="Home"            component={Home}             options={{headerTintColor: '#9ac234'}} />
        </Stack.Navigator>
    );

}