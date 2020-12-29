 import React, {Component} from 'react';
import AppPreLoader from '../components/AppPreLoader';
import{ Image, Dimensions, View, TouchableOpacity, FlatList, Button, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {Grid, Row, Col } from 'react-native-easy-grid';
import { Container, Text, Body, Right, List, ListView, Thumbnail, ListItem} from 'native-base';
import Strings from '../utils/Strings';
import ConfigApp from '../utils/ConfigApp';
import BannerAd from '../components/BannerAd';
import RestDay from '../components/RestDay';
import { NavigationActions } from 'react-navigation';

var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Day2 extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST88}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.lightarrowbackicon}/>
    }); 

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {  
    
       return fetch(ConfigApp.URL+'json/data_day2.php?workout='+this.props.navigation.state.params.WorkoutId)
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

  ExerciseDetails (item) {
    const navigateAction = NavigationActions.navigate({
      routeName: 'ExerciseDetailsScreen',
      params: {item}
    });
    this.props.navigation.dispatch(navigateAction);
  }

  renderFooter = () => {
  const dataSource = this.state.dataSource
  if (dataSource.length != 0) return null;


  return (
    <RestDay/>
   );
};

  render() {


    if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    const { params } = this.props.navigation.state;
    const WorkoutId = params ? params.WorkoutId : null;

    return (

<Container style={styles.background_general}>
<View style={{flex: 1}}>

<FlatList
          data={ this.state.dataSource }
          refreshing="false"
          renderItem={({item}) =>
                
            <ListItem style={{paddingLeft: 0, marginLeft: 0, backgroundColor:'#FFF', opacity: 1, marginVertical: 20, borderColor: 'rgba(0,0,0,0.05)', borderBottomWidth: 1}}  onPress={() => this.ExerciseDetails(item)} >
              <Thumbnail square size={120} source={{ uri: ConfigApp.URL+'images/'+item.exercise_image }} style={{paddingLeft: 10, marginLeft: 10, width: 120, height: 80}} />
              <Body style={{paddingLeft: 0, marginLeft: 0}}>
                <Text numberOfLines={1} style={{fontSize: 14, marginBottom: 3}}>
                {item.exercise_title}
                </Text>
                <Text note>
                {item.level_title}
                </Text>
              </Body>
              <Right style={{paddingRight: 10}}>
                <Text note>
                <Ionicons name="ios-arrow-forward" style={{fontSize: 16}}/>
                </Text>
              </Right>
            </ListItem>
          
}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={this.renderFooter}


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

