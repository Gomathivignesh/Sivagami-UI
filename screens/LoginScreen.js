import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet ,Image,Text,KeyboardAvoidingView,AsyncStorage,TouchableOpacity} from 'react-native';
import MainTabNavigator from '../navigation/MainTabNavigator'
import {Redirect} from 'react-router' 
import Spinner from 'react-native-loading-spinner-overlay';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
          spinner:false
        };
      }
      
      async onLogin() {
        const { username, password } = this.state;
        this.setState({spinner:true})
        try {
            let response = await fetch('https://gold-rate-ct.herokuapp.com/api/users/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
              }),
            });
            let responseJson = await response.json();
            if(responseJson.id)
            {
              this.setState({spinner:false})
              await AsyncStorage.setItem('userToken', 'abc');
              this.props.navigation.navigate('App')
            }
            else{
              Alert.alert('Login Failed')
              this.setState({spinner:false})
            }
            // this.setState({spinner:false})
            //   this.props.navigation.navigate('App')
           
            console.log('r',responseJson)
          } catch (error) {
            console.error(error);
            this.setState({spinner:false})
          }

      

        // if(this.state.username === 'admin' && this.state.password === 'admin')
        // {
        //     Alert.alert('sucess')
        //     this.props.navigation.navigate('App')
            
        // }
        // else{
        //     Alert.alert('failed')
        // }
    
        
      }

      onSignup()
      {
        this.props.navigation.navigate('SignUp')
      }
    
      render() {
        return (
          
          <View style={styles.container}>
          {(!this.state.spinner)?
          <KeyboardAvoidingView style={{alignItems:'center'}}>
            <Image style={{marginBottom:30}}source={require('../assets/images/icon.png')}>

            </Image>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Username'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />

            {/* <Text style={{backgroundColor:'#fba542',width:350,height: 44,padding: 10,justifyContent:'center',alignContent:'center',marginTop:16,color:'white'}} onPress={this.onLogin.bind(this)}>Login</Text> */}
            
            {/* <Button
              title={'Login'}
              width={350}
              color={'#fba542'}
              onPress={this.onLogin.bind(this)}
            /> */}

            <TouchableOpacity style={{width:300,height:44,backgroundColor:'#fba542',justifyContent:'center',marginTop:15}} onPress={this.onLogin.bind(this)}>
              <Text style={{textAlign:'center',fontSize:16,color:'#ffffff'}}>Login</Text>
            </TouchableOpacity>

            <Text style={{padding:20,fontSize:18}}>New User?SignUp Now</Text>


            {/* <Text style={{backgroundColor:'#FF7992',width:350,height: 44,padding: 10,justifyContent:'center',color:'white'}} onPress={this.onSignup.bind(this)}>SignUp</Text> */}

          {/* <Button
              title={'SignUp'}
              width={350}
              color={'#FF7992'}
              onPress={this.onSignup.bind(this)}
            /> */}
            <TouchableOpacity style={{width:300,height:44,backgroundColor:'#ff7992',justifyContent:'center'}} onPress={this.onSignup.bind(this)}>
              <Text style={{textAlign:'center',fontSize:16,color:'#ffffff'}}>SignUp</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
            :
            <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
          
          }
          </View>
        );
      }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
      paddingTop:30
    },
    input: {
      width: 300,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: '#dedede',
      marginBottom: 15,
    },
  });