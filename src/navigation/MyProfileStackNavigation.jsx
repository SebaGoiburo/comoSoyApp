import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Perfil from "../screens/Perfil";
import ImageSelector from "../screens/ImageSelector";

const Stack = createNativeStackNavigator()

const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="My Profile"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Perfil" component={Perfil} />
      <Stack.Screen name="Image Selector" component={ImageSelector} />
    </Stack.Navigator>
  )
}

export default MyProfileStackNavigator