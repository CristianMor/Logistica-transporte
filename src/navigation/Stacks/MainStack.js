import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TouchableOpacity, Image} from 'react-native';
import {colors} from '../../utils';
import Verify from '../../screens/verify';
import Home from '../../screens/home';


const Stack = createNativeStackNavigator();

const MainStack = () => {

	return (
		<Stack.Navigator>
			<Stack.Screen name="Verify" component={Verify} options={{headerShown: false}} />
			<Stack.Screen
				name="Home"
				component={Home}
				options={({navigation}) => ({
					title: 'En ejecución',
					headerStyle: {backgroundColor: colors.terteary},
					headerTintColor: colors.primary,
					headerTitleStyle: {
						fontFamily: 'JosefinSans-Regular',
					},
					headerLeft: () => (
						<TouchableOpacity
							style={{padding: 5, alignItems: 'center'}}
							onPress={() => navigation.goBack()}
						><Image source={require('../../../assets/icons/menu.png')} /></TouchableOpacity>
					)
				})}
			/>
		</Stack.Navigator>
	);
}

export default MainStack;
