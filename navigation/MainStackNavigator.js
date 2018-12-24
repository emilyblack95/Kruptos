import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LevelsScreen from '../screens/LevelsScreen';

const MainStackNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen
	},
	Levels: {
		screen: LevelsScreen
	}
});

export default MainStackNavigator;
