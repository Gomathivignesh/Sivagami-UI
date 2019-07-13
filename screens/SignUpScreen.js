import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet ,Image,Text,KeyboardAvoidingView,AsyncStorage,TouchableOpacity} from 'react-native';
import MainTabNavigator from '../navigation/MainTabNavigator'
import {Redirect} from 'react-router' 
import Spinner from 'react-native-loading-spinner-overlay';

export default class SignUpScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          shopname: '',
          password: '',
          confirmpassword:'',
          email:'',
          mobileno:'',
          address:'',
          spinner:false
        };
      }
      
      async onLogin() {
        const { shopname, password ,email,mobileno,address} = this.state;
        if(this.state.shopname && this.state.password && this.state.email && this.state.mobileno && this.state.address != null)
        {
            if(this.state.password == this.state.confirmpassword)
            {
                this.setState({spinner:true})
                
                try {
                    let response = await fetch('https://gold-rate-ct.herokuapp.com/api/users', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        username: this.state.shopname,
                        password: this.state.password,
                        email:this.state.email,
                        address:this.state.address,
                        mobile:this.state.mobileno
                      }),
                    });
                    let responseJson = await response.json();
                    this.setState({spinner:false})
                    await AsyncStorage.setItem('userToken', 'abc');
                    this.props.navigation.navigate('App')
                    console.log(responseJson)
                    
                  } catch (error) {
                    console.error(error);
                    this.setState({spinner:false})
                  }

            }
            else{
                Alert.alert('Check Username and Password and match')

            }
            

        }
        else
        {
            Alert.alert('Enter All the Details')
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

    
    
      render() {
        return (
          
          <View style={styles.container}>
          {(!this.state.spinner)?
          <KeyboardAvoidingView style={{alignItems:'center'}}>
            <Image style={{alignItems:'center',justifyContent:'center',alignContent:'center', height:100, width:100 }}source={require('../assets/images/icon.png')}>

            </Image>
            <TextInput
              value={this.state.shopname}
              onChangeText={(shopname) => this.setState({ shopname })}
              placeholder={'ShopName'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />

            <TextInput
              value={this.state.confirmpassword}
              onChangeText={(confirmpassword) => this.setState({ confirmpassword })}
              placeholder={'ConfirmPassword'}
              secureTextEntry={true}
              style={styles.input}
            />

            <TextInput
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
              placeholder={'Email'}
              textContentType={'emailAddress'}
              style={styles.input}
            />

            <TextInput
              value={this.state.mobileno}
              onChangeText={(mobileno) => this.setState({ mobileno })}
              placeholder={'MobileNo'}
              style={styles.input}
            />

            <TextInput
              value={this.state.address}
              onChangeText={(address) => this.setState({ address })}
              placeholder={'Address'}
              style={styles.input}
            />

          {/* <TouchableOpacity style={{width:300,height:44,backgroundColor:'#fba542',justifyContent:'center'}} onPress={this.onLogin.bind(this)}>
              <Text style={{textAlign:'center',fontSize:16,color:'#ffffff'}}>Login</Text>
            </TouchableOpacity> */}
            
            { <Button
              title={'Signup'}
              width={350}
              color={'#FF7992'}
              onPress={this.onLogin.bind(this)}
            /> }

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
      paddingTop:10,
      alignItems:'center',
      backgroundColor: '#ecf0f1',
    },
    input: {
      width: 300,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: '#dedede',
      marginBottom: 10,
    },
  });