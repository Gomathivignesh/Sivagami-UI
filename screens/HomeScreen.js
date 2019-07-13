import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import Carousel from 'react-native-banner-carousel';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import { Row } from 'react-native-table-component';

const images = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/adc88051454675.58ee979594df5.jpg",
  "https://i.ytimg.com/vi/QMBPnXuJWRM/maxresdefault.jpg",
   
];
// const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 180;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'அறிமுகம்',
  };

  

  renderPage(image, index) {
    return (
        <View key={index}>
            <Image style={{ width: '100%', height: BannerHeight,resizeMode:'cover' }} source={{ uri: image }} />
        </View>
    );
}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
            <Text style={styles.header}>
            பாளையங்கோட்டை{'\n'} தங்கம், வெள்ளி, வைர,{'\n'}நகை வியாபாரிகள் சங்கம் 
            </Text>
        </View>
        <View>
            <Text style={styles.welcome}>
            நல்வரவு !
            </Text>
        </View>
        <View>
            <Text style={styles.welcomepara}>
             we strive to provide the best rates for buying and selling Gold & Silver bars.
             In order to keep our rates transparent and open to all, we run live prices for gold & silver in our website and mobile app.

            </Text>
        </View>
          {/* <View style={styles.welcomeContainer}>
          <Carousel
                    autoplay
                    loop
                    index={0}
                    showsPageIndicator>
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
          </View> */}
          <View style={styles.founders}>
            <View style={styles.foundercolumn}>
            <Image style={styles.founderimage}
                source={require('../assets/images/one.png')}
                />
                <Text style={styles.founderhead}>
                தலைவர்
                </Text>
                <Text style={styles.foundertext}>
                சிவகாமி {'\n'} S.ஆறுமுகம்
                </Text>
            </View> 
            <View style={styles.foundercolumn}>
            <Image style={styles.founderimage}
                source={require('../assets/images/three.png')}
                />
                <Text style={styles.founderhead}>
                செயலர்
                </Text>
                <Text style={styles.foundertext}>
                  K.S.R.சுரேஷ் 
                </Text>
            </View>
            <View style={styles.foundercolumn}>
            <Image style={styles.founderimage}
                source={require('../assets/images/two.png')}
                />
                <Text style={styles.founderhead}>
                பொருளாளர்
                </Text>
                <Text style={styles.foundertext}>
                  J.ஸ்ரீனிவாசன்
                </Text>
            </View>
          </View>
              </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer:{
    marginVertical:15,
  },

  founderimage:{
    width:100,
    height:100
  },

  founders:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:20
  },

  foundercolumn:{
    textAlign:'center',
    flexDirection:'column',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent:'flex-start',
    alignItems:'center'

  },

  founderhead:{
    fontWeight:'bold',
    fontSize:16,
    lineHeight:19,
    color:'#fba542',
    textAlign:'center',
  },

  foundertext:{
    fontSize:16,
    textAlign:'center',
  },
  welcome: {
    marginTop:5,
    marginBottom: 10,
    color: '#fba542',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',
    fontWeight:'bold'
  },
  contentContainer: {
    paddingTop: 20,
  },
  welcomepara: {
    alignItems: 'center',
    paddingVertical:5,
    paddingHorizontal:30,
    textAlign:'center',
    fontSize:18
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  header: {
    textAlign: 'center',
    fontSize:23,
    fontWeight:'bold',
    lineHeight:32,
    paddingTop:10
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
