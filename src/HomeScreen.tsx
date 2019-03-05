import * as React from 'react';
import { Button } from 'react-native';

export default class HomeScreen extends React.Component<{ navigation: any }, {}> {
  public static navigationOptions = {
    title: 'Welcome',
  };

  public render(): JSX.Element {
    const { navigate } = this.props.navigation;

    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', { name: 'Jane' })}
      />
    );
  }
}