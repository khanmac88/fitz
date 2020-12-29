
//////////////////// CONFIG APP

import Constants from 'expo-constants';

const isStandAloneApp = Constants.appOwnership == "standalone";

const ConfigApp = {

    // backend url
    URL: "http://www.fitnesszq.com/",
    // facebook page url
    FACEBOOK: "https://facebook.com",

    // youtube page url
    YOUTUBE: "https://youtube.com",

    // twitter page url
    TWITTER: "https://twitter.com",

    // twitter page url
    INSTAGRAM: "https://instagram.com",

    // banner admob unit id
    BANNER_ID: "ca-app-pub-6688047856305668/5870727446",

    // interstitial admob unit id
    INTERSTITIAL_ID: "ca-app-pub-6688047856305668/5594577032",

    // testdevice id, DON'T CHANGE IT
    TESTDEVICE_ID : isStandAloneApp?"EMULATOR" : "EMULATOR"
};

export default ConfigApp;
