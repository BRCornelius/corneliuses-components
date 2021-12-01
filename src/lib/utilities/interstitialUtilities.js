const interstitialOptions = [
    'https://assets.corneliuses.com/photos/common/interstitial-typing.gif',
    'https://assets.corneliuses.com/photos/common/interstitial-lenny.gif',
    'https://assets.corneliuses.com/photos/common/interstitial-syd.gif',
    'https://giphy.com/embed/reta7I8j3cme7WztVs',
    'https://giphy.com/embed/wmuHxlVDcTNAGfI1cX'
];

export const getInterstitialImage = () => interstitialOptions[Math.floor(Math.random()*interstitialOptions.length)];
