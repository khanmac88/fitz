 import React, {Component} from 'react';
import { NavigationActions, StackNavigator } from 'react-navigation';
import AppPreLoader from '../components/AppPreLoader';
import{ ImageBackground, Dimensions, View, Image, SafeAreaView, FlatList, Button, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {Grid, Row } from 'react-native-easy-grid';
import { Container, Text, Body, Right, List, ListView, Left, Thumbnail, ListItem} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import BannerAd from '../components/BannerAd';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Tags extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST55}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.lightarrowbackicon}/>,
    });

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    
       return fetch(ConfigApp.URL+'json/data_tags.php')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }

PostsByTag=(tag_id, tag_title)=>
{
      this.props.navigation.navigate('PostsByTagScreen', { IdTag: tag_id, TitleTag: tag_title });    
}

  render() {

    if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    return (

<Container style={styles.background_general}>

<View style={{flex: 1}}>
         <FlatList
          data={ this.state.dataSource }
          renderItem={({item, index}) => 
                <ListItem icon onPress={this.PostsByTag.bind(this, item.tag_id, item.tag_title)} style={{marginVertical: 10}}>
              <Body>
              <Text>{item.tag_title}</Text>
              </Body>
              <Left>
                <Ionicons name="ios-arrow-forward" />
              </Left>
            </ListItem>
}
        keyExtractor={(item, index) => index.toString()}

        />
            
</View>

<SafeAreaView>
<View style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
<BannerAd/>
</View>
</SafeAreaView>
</Container>
    );
  }
}
