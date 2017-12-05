import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button, TouchableHighlight, Alert } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  _onPressButton() {
    Alert.alert('Wrong password!')
  }

  render() {
    return ( 
      <View style={styles.container}>
      	

            <Image style={styles.logo} source={require('../../images/simplelogowithtext.png')}/>
{/*  
      		<TextInput
      			style={styles.textInputSection}
          		placeholder="Username"
          		onChangeText={(text) => this.setState({text})}
        	/>

          	<TextInput 
          		style={styles.textInputSection}
          		placeholder="Password"
          		onChangeText={(text) => this.setState({text})}
        	/>

        	<TouchableHighlight onPress={this._onPressButton} underlayColor="white">
            	<View style={styles.button}>
            		<Text style={styles.buttonText}>Login</Text>
          		</View>
          	</TouchableHighlight>
*/}
            <View>
                <LoginForm/>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#007F12'
  },

  title: {
  	textAlign: 'center',
    color: '#2c3e50',
    fontWeight: 'bold',
    fontSize: 40,
    padding: '20%'
  },

  logo: {
    marginTop: '20%',
    flex: 1,
    aspectRatio: 1, 
    resizeMode: 'contain',
    backgroundColor: 'transparent'
  },

  textInputSection: {
  	width: '70%',
  	alignItems: 'center',
  	textAlign: 'center',
  	marginTop: '10%',
  	alignSelf: 'center'
  },

  loginButtonSection: {
      width: '100%',
      height: '20%',
      justifyContent: 'center',
      alignItems: 'center'
  },

  button: {
    marginBottom: 30,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3'
  },

  buttonText: {
    padding: 20,
    fontSize: 20,
    color: 'white'
  }

})


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Login);