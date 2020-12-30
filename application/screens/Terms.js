import React, {Component} from 'react';
import * as firebase from 'firebase';
import AppPreLoader from '../components/AppPreLoader'; 
import { NavigationActions, StackNavigator } from 'react-navigation';
import{TouchableOpacity, Dimensions, View, Image, FlatList, ScrollView} from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import { Container, Text} from 'native-base';
import ConfigApp from '../utils/ConfigApp';
import HTML from 'react-native-render-html';
import Strings from '../utils/Strings';


var styles = require('../../assets/files/Styles');
var {height, width} = Dimensions.get('window');

export default class Terms extends Component {
   static navigationOptions = ({ navigation }) => ({
    title: `${Strings.ST82}`,
    headerLeft: () =>  <Ionicons name={'md-arrow-back'} onPress={ () => { navigation.goBack() }} style={styles.lightarrowbackicon}/>,
    });


constructor(props) {

    super(props);

    this.state = {
      isLoading: true
    }

  }

  componentDidMount() {
    
       return fetch(ConfigApp.URL+'json/data_strings.php')
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


  render () {

        if (this.state.isLoading) {
      return (
        <AppPreLoader/>
      );
    }

    return (

<Container style={styles.background_general}>
<ScrollView>

<View style={{padding: 20}}>

<Text>
PRIVACY POLICY & TERMS OF SERVICE{'\n'}{'\n'}

The developer respects the privacy of our users. This Privacy Policy explains how the developer collects, use, disclose, and safeguard your information when you utilize the mobile application. Please read this Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE APPLICATION.
We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Application after the date such revised Privacy Policy is posted.  
This Privacy Policy does not apply to the third-party online/mobile store from which you install the Application or make payments, including any in-game virtual items, which may also collect and use data about you.  We are not responsible for any of the data collected by any such third party.  

{'\n'}COLLECTION OF YOUR INFORMATION{'\n'}{'\n'}
We may collect information about you in a variety of ways. The information we may collect via the Application depends on the content and materials you use, and includes:   
Mobile Device Access
We may request access or permission to certain features from your mobile device, including your mobile device’s storage, sensors, and other features. If you wish to change our access or permissions, you may do so in your device’s settings.  
{'\n'}USE OF YOUR INFORMATION{'\n'}{'\n'}

App does not request any personal information for the utilization of the software but your information. But your personal account maybe used when we

- Request feedback and contact us about your use of the Application.  
DISCLOSURE OF YOUR INFORMATION
- Third-Party Advertisers{'\n'}{'\n'}

We may use third-party advertising companies to serve ads when you visit the Application. These companies may use information about your visits to the Application and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.  
- THIRD-PARTY WEBSITES{'\n'}{'\n'}

The Application may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Application, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the Application. 
SECURITY OF YOUR INFORMATION{'\n'}{'\n'}

We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information. 
CONTACT US{'\n'}


If you need support regarding the app, contact us via email. support@fitzfitness.com

</Text>
</View>
</ScrollView>

</Container>

    )
  }

}