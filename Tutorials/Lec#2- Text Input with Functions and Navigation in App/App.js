import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import InputContainer from "./src/screens/Input";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Input: InputContainer
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
