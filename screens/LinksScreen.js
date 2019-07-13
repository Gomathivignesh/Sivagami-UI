import React, { Component } from 'react';
import { ScrollView, StyleSheet, View ,Dimensions,Image,Text} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { LinearGradient } from 'expo';
import Carousel from 'react-native-banner-carousel';

var dateFormat = require('dateformat');
var now = new Date();

const images = [
  "https://ichef.bbci.co.uk/news/660/cpsprodpb/AA7D/production/_104354634_04.jpg",
  "https://cdn.shopify.com/s/files/1/0215/8965/5616/products/LECOHR0178.jpg?v=1552054140",
  "https://d1jcp4wnfau20b.cloudfront.net/media/catalog/product/cache/1/image/800x800/0dc2d03fe217f8c83829496872af24a0/m/g/mgfdznk0121.jpg",
  "https://www.kalyanjewellers.net/Jewellery/Gold/images/MAYUR-CHANDRAHARAM-NIVARA-GOLD-NECKLACE.jpg",
  "https://ae01.alicdn.com/kf/HTB1Cc1wSVXXXXXrXpXXq6xXFXXXN/Not-Sensitive-925-Sterling-Silver-Ornaments-Scrub-Bead-Six-Chains-Geometric-Round-Embankment-Romantic-Wind-Bracelet.jpg_640x640.jpg",
  "https://5.imimg.com/data5/XH/PQ/QE/SELLER-5176015/silver-kamatchi-vilakku-diya-500x500.jpg"
];
// const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height/2.5;
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'விலை - '+ dateFormat(now, "mmmm dS yyyy"),
  };


  constructor(props) {
    super(props);
    this.state = {
      gold:[],
      silver:[]
    
    }
    this.getMoviesFromApi()
  }

  async  getMoviesFromApi() {
    try {
      let response = await fetch('https://gold-rate-ct.herokuapp.com/api/goldRates/getLiveAPI',{
      method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            });
      let responseJson = await response.json();
      console.log('rate',responseJson)
      let responseData  = JSON.parse(responseJson.data.gold)
      let responseData1  = JSON.parse(responseJson.data.silver)
      // console.log('r',JSON.stringify(responseData[1]))
      this.setState({gold:responseData})
      this.setState({silver:responseData1})
    } catch (error) {
      console.error(error);
    }
  }

  renderPage(image, index) {
    return (
        <View key={index}>
            <Image style={{ width: '100%', height: BannerHeight,resizeMode:'cover' }} source={{ uri: image }} />
        </View>
    );
}

  render() {
    const state = this.state;
    console.log('gol',this.state.silver)
    return (
      <ScrollView style={styles.container}>
      
      <View style={styles.container2}>
        {/* <Table>
          <Row data={state.tableHead} flexArr={[2, 1, 1]} style={styles.head} textStyle={styles.texthead}/>
          <TableWrapper style={styles.wrapper}>
            <Col style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table> */}
        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{borderWidth:1,borderColor:'#000000',backgroundColor:'#fba542',width:'40%',padding:8}}>Commodity</Text>
            <Text style={{borderWidth:1,borderColor:'#000000',backgroundColor:'#fba542',width:'30%',padding:8}}>Sell</Text>
            <Text style={{borderWidth:1,borderColor:'#000000',backgroundColor:'#fba542',width:'30%',padding:8}}>Buy</Text>
            {/* <Text style={{borderWidth:1,borderColor:'#000000',backgroundColor:'#fba542',width:'20%',padding:8}}>Sovereign</Text> */}
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{borderWidth:1,borderColor:'#000000',width:'40%',padding:8}}>தங்கம் 24காரட் </Text>
            <Text style={{borderWidth:1,borderColor:'#000000',width:'30%',padding:8}}>Rs. {this.state.gold[1]}</Text>
            <Text style={{borderWidth:1,borderColor:'#000000',width:'30%',padding:8}}>Rs. {this.state.gold[1]}</Text>
            {/* <Text style={{borderWidth:1,borderColor:'#000000',width:'20%',padding:8}}>{(this.state.gold[2]*8)}</Text> */}
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{borderWidth:1,borderColor:'#000000',width:'40%',padding:8}}>தங்கம் 22காரட் </Text>
            <Text style={{borderWidth:1,borderColor:'#000000',width:'30%',padding:8}}>Rs. {this.state.gold[3]}</Text>
            <Text style={{borderWidth:1,borderColor:'#000000',width:'30%',padding:8}}>Rs. {this.state.gold[3]-(this.state.gold[3]*3/100)}</Text>
            {/* <Text style={{borderWidth:1,borderColor:'#000000',width:'20%',padding:8}}>{(this.state.gold[4]*8)}</Text> */}
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{borderWidth:1,borderColor:'#000000',width:'40%',padding:8}}>வெள்ளி 1கிராம் </Text>
            <Text style={{borderWidth:1,borderColor:'#000000',width:'30%',padding:8}}>{this.state.silver[1]}</Text>
            <Text style={{borderWidth:1,borderColor:'#000000',width:'30%',padding:8}}>-</Text>
            {/* <Text style={{borderWidth:1,borderColor:'#000000',width:'20%',padding:8}}>-</Text> */}
          </View>

        </View>
      </View>

      <View style={styles.welcomeContainer}>
      <Carousel
                    autoplay
                    loop
                    index={0}
                    showsPageIndicator>
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
      </View>

    
      </ScrollView>
  
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  welcomeContainer:{
    marginVertical:15,
  },
  container2: { flex: 1, padding: 10, paddingTop: 15, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#fba542' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 40  },
  texthead: { textAlign: 'center', color:'#ffffff',fontWeight:'700', fontSize:18 },
  text: { textAlign: 'center', color:'#000000', fontSize:16 }
});
