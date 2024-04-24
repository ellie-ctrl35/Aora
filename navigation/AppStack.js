import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Tabs from './Tabs';

const AppStack = ( ) => {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen options={{ headerShown: false }} name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default AppStack;