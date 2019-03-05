// export default class App extends React.Component {
//   public render(): JSX.Element {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     flex: 1,
//     justifyContent: 'center',
//   },
// });
import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen},
  Profile: { screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
