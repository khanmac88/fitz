import 'react-native-get-random-values';
import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
import{ ImageBackground, Dimensions, View, TouchableOpacity, ScrollView, FlatList, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import {Grid, Row, Col } from 'react-native-easy-grid';
import { Container, Content, Footer, FooterTab, Body, Text, List, Right, Button, ListItem} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import Strings from '../utils/Strings';
import BannerAd from '../components/BannerAd';
import { NavigationActions } from 'react-navigation';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class ExerciseDetails extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST96}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.lightarrowbackicon}/>,
    });

  constructor(props) {
    super(props);
    const {params} = props.navigation.state;
    this.state = {
      item: params.item,
      mute: true,
      shouldPlay: false,
    };
  }

  handlePlayAndPause = () => {  
    this.setState((prevState) => ({
       shouldPlay: !prevState.shouldPlay  
    }));
  }

  componentDidMount() {
    
       return fetch(ConfigApp.URL+'json/data_bodypart.php?exercise='+this.props.navigation.state.params.item.exercise_id)
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



  render() {

  const {item} = this.state;  

return (

<Container style={styles.background_general}>
<ScrollView>
<View style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center', paddingTop: 15}}>
<BannerAd/>
</View>

<WebView
source={{ uri: 'https://www.youtube.com/embed/'+item.exercise_video+'?rel=0&autoplay=0&showinfo=0&controls=0&playsinline=1&modestbranding=1'}}
style={{ width: width, height: height * 0.30, marginTop: 15, marginBottom: 20 }}
/>

<Grid>
<Row>

<Col style={styles.col_exercise}>
<Image source={require('../../assets/images/sets.png')} resizeMode="contain" style={styles.icon_exercise} />
<Text style={styles.titlecol_exercise}>{Strings.ST97}</Text>
<Text>{item.exercise_sets}</Text>
</Col>

<Col style={styles.col_exercise}> 
<Image source={require('../../assets/images/reps.png')} resizeMode="contain" style={styles.icon_exercise} />
<Text style={styles.titlecol_exercise}>{Strings.ST98}</Text>
<Text>{item.exercise_reps}</Text>
</Col>

<Col style={styles.col_exercise}>
<Image source={require('../../assets/images/chrono.png')} resizeMode="contain" style={styles.icon_exercise} />
<Text style={styles.titlecol_exercise}>{Strings.ST99}</Text>
<Text>{item.exercise_rest}</Text>
</Col>

</Row>

<Row style={{ backgroundColor: '#FFF', borderTopWidth: 0, borderColor: 'rgba(0,0,0,0.2)', marginBottom: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', marginVertical: 30, marginHorizontal:20, paddingBottom: 20}}>

<View>
<Text style={{fontWeight: 'bold', marginBottom: 8}}>{Strings.ST107}</Text>
<Text>{item.exercise_title}</Text>
<View style={{padding: 8}} />
<Text style={{fontWeight: 'bold', marginBottom: 8}}>{Strings.ST100}</Text>
<Text>{item.equipment_title}</Text>
<View style={{padding: 8}} />
<Text style={{fontWeight: 'bold', marginBottom: 8}}>{Strings.ST101}</Text>
<FlatList data={ this.state.dataSource } refreshing="false" renderItem={({item}) => <Text>{item.bodypart_title}</Text> } keyExtractor={(item, index) => index.toString()} />


</View>

</Row>

</Grid>
</ScrollView>
</Container>

    );
  }
}

