import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { defaultErrorCopy, useOutsideClick } from '../../utilities';

const Error = ({copy, customClass, hasError, imageUrl, redirect, setHasError}) => {
    const wrapperRef = useRef(null)
    const toggleModal = () => setHasError(false);
    const redirectFunction = () => window.open(redirect, '_self');
    const handleOutsideClick = redirect ? redirectFunction : toggleModal
    useOutsideClick(wrapperRef, handleOutsideClick)
    const errorModal = <div className={`${customClass}--container`}>
        <img alt={'There has been an error'} className={`${customClass}--image`} src={imageUrl} />
        <p className={`${customClass}--copy`}>{copy}</p>
    </div>
    return hasError ? errorModal : null
};
Error.propTypes = {
    copy: PropTypes.string,
    customClass: PropTypes.string,
    imageUrl: PropTypes.string,
    hasError: PropTypes.bool.isRequired,
    redirect: PropTypes.string,
    setHasError: PropTypes.func.isRequired
};
Error.defaultProps = {
    copy: defaultErrorCopy,
    customClass: 'CC-Error',
    defaultErrorUrl: 'https://assets.corneliuses.com/photos/common/error-nedry.gif',
    redirect: ''
};

export default Error;
