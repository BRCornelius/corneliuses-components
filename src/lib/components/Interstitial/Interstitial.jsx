import React from 'react';
import PropTypes from 'prop-types';
import { getInterstitialImage } from '../../utilities';

const Interstitial = ({condition, customClass, imageSource}) => {
    return <>
        {condition && <div className={`${customClass}--container`}>
            <img alt="Interstitial Please Wait" src={imageSource} className={`${customClass}--image`} />
        </div>}
    </>
};
Interstitial.propTypes = {
    condition: PropTypes.bool.isRequired,
    customClass: PropTypes.string,
    imageSource: PropTypes.string
};
Interstitial.defaultProps = {
    customClass: 'CC-Interstitial',
    imageSource: getInterstitialImage()
};
export default Interstitial;