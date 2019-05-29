import { createAppContainer, createStackNavigator } from 'react-navigation';

import PeoplePage from './src/screens/PeoplePage';
import PeopleDetailPage from './src/screens/PeopleDetailPage';

import { capitalizeFirstLetter } from './src/util';

const AppNavigator = createStackNavigator({
  home: {
    screen: PeoplePage
  },
  PeopleDetail: {
    screen: PeopleDetailPage,
    navigationOptions: ( { navigation }) => {
      const {people} = navigation.state.params;

      return {
        title: capitalizeFirstLetter(people.name.first),
        headerTitleStyle: {
          color: '#fff',
          fontSize: 20
        }
      }
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Pessoas',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#3f7bdb'
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 20,
      flexGrow: 1,
      textAlign: 'center'
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;