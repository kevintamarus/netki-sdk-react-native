import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Button,
  Form,
  Item,
  Input
} from 'native-base';

export default class ValidateID extends Component<{}> {
  constructor(props) {
    super(props);
    this.handleValidationClick = this.handleValidationClick.bind(this);
    this.state = {
      inputWorkFlowID: null,
      inputPhone: null,
      inputEmail: null,
      inputCountry: null,
      inputIdentityNumber: null
    }
  }

  handleValidationClick() {

  }

  render() {
    return (
      <View>
        <Form>
          <Item>
            <Input placeholder="Work Flow ID" />
          </Item>
          <Item last>
            <Input placeholder="Phone" />
          </Item>
          <Item last>
            <Input placeholder="Email" />
          </Item>
          <Item last>
            <Input placeholder="Country" />
          </Item>
          <Item last>
            <Input placeholder="Identity Number" />
          </Item>
        </Form>
        <Button success><Text>Request Data</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});