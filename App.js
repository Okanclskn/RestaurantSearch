import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearcScreen from "./src/screens/SearchScreen";
import ResultShowScreen from "./src/screens/ResultShowScreen";
const navigator = createStackNavigator(
  {
    Search: SearcScreen,
    ResultShow: ResultShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
