import React, {Component} from 'react';
import ConfigApp from '../utils/ConfigApp';
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';

class BannerAd extends React.Component {

  render () {

    return (

<AdMobBanner
  bannerSize="banner"
  adUnitID={ConfigApp.BANNER_ID}
  setTestDeviceIDAsync={ConfigApp.TESTDEVICE_ID}
  onDidFailToReceiveAdWithError={this.bannerError} />

    )
  }

}

export default BannerAd;
