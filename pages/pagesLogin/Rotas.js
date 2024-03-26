import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pagesApp/Home';
import Acesso from './Acesso';
import Cad from './cad';

const Stack = createStackNavigator();

export default function Rotas() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Cad"    component={Cad}     />
            <Stack.Screen name="Acesso" component={Acesso}  />
            <Stack.Screen name="Home"   component={Home}    />
        </Stack.Navigator>
    );

}