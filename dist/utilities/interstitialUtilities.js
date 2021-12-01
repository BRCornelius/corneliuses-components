"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInterstitialImage = void 0;
const interstitialOptions = ['https://assets.corneliuses.com/photos/common/interstitial-typing.gif', 'https://assets.corneliuses.com/photos/common/interstitial-lenny.gif', 'https://assets.corneliuses.com/photos/common/interstitial-syd.gif', 'https://giphy.com/embed/reta7I8j3cme7WztVs', 'https://giphy.com/embed/wmuHxlVDcTNAGfI1cX'];

const getInterstitialImage = () => interstitialOptions[Math.floor(Math.random() * interstitialOptions.length)];

exports.getInterstitialImage = getInterstitialImage;