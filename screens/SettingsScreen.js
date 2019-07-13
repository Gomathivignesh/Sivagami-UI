import React from 'react';
import {View,Text,StyleSheet,Image,Button,Dimensions,AsyncStorage,TouchableOpacity} from 'react-native';
import { Card} from 'native-base';
import Carousel from 'react-native-banner-carousel';

const images = [
  "https://i.ytimg.com/vi/72aU3HonljM/maxresdefault.jpg",
  "https://www.princejewellery.com/media/Banner_1_-Mobile.jpg",
  "https://d3e64e9nnbmfeb.cloudfront.net/wp-content/uploads/2016/09/t_1_b.jpg"
  
  
  
];

const BannerHeight = Dimensions.get('window').height/2.5;
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'விளம்பரங்கள் & தொடர்பு',
  };


  async onLogout() {
    
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
    
  }
  renderPage(image, index) {
    return (
        <View key={index}>
            <Image style={{ width: '100%', height: BannerHeight,resizeMode:'cover' }} source={{ uri: image }} />
        </View>
    );
}

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      
      <View style={styles.container}>
        
        <Card style={{backgroundColor:'white',marginRight:10,marginLeft:10,marginTop:5,borderRadius:6,elevation:2}}>
           <View>
            <Text style={styles.header}>
              Contact Address
            </Text>
          </View>
          <View>
            <Text style={styles.paragraph}>
              39/4B-1, North Bypass Road,{'\n'}
              Vannarapattei, Tirunelveli - 627 003
              +91-9600933809{'\n'}
            </Text>
          </View> 
        </Card>
        <View>
        <Button
                  title={'logout'}
                  style={styles.loginButton}
                  width={350}
                  color={'#fba542'}
                  onPress={this.onLogout.bind(this)}
                    /> 
        </View>
        
                    
        <Carousel
                          autoplay
                          loop
                          index={0}
                          showsPageIndicator>
                          {images.map((image, index) => this.renderPage(image, index))}
                      </Carousel>
        
        </View>  
      
         

      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    paddingTop:10
  },
  welcomeContainer:{
    marginVertical:15,
  },
  loginButtonSection: {
    width: 300,
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
 },

  header: {
    color: 'rgb(255,255,255)',
    backgroundColor:'#fba542',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'left',
    padding:10,
  },
  paragraph:{
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:10,
    paddingRight:10,
    fontSize:14,
    textAlign:'left',
    color:'#000',
    lineHeight:22,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  }
})