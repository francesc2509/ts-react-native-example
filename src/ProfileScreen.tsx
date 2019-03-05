import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default class ProfileScreen extends React.Component<{navigation: any}, {}> {
  public static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props: any) {
    super(props);

    this.test = this.test.bind(this);
  }

  public render(): JSX.Element {
    const { navigate } = this.props.navigation;
    const state = this.props.navigation.state;
    return (
      <View>
        <Text>
          { JSON.stringify(this.state) }
        </Text>
        <Button title="Click!" onPress={() => this.test(state.params)}></Button>
      </View>
    );
  }

  private test(params: any) {
    this.setState({ params });
  }
}