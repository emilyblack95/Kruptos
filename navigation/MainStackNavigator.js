import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LevelsScreen from '../screens/LevelsScreen';
import ItemScreen from '../screens/ItemScreen'

const MainStackNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen
	},
	Levels: {
		screen: LevelsScreen
	},
	Item: {
		screen: ItemScreen
	}
});

export default MainStackNavigator;
