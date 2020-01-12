import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import Hello from './src/screens/ComponentsScreen';
import Exercise1 from './src/screens/Exercise1Solution';
import ListScreen from './src/screens/ListScreen';
import ListSolution from './src/screens/Exercise2SolutionList';
const navigator = createStackNavigator({
  Home: HomeScreen,
  Components: Exercise1,
  List: ListScreen,
  ListExercise: ListSolution,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'App'
  }
});

export default createAppContainer(navigator);