import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Alert.module.scss'


const cx = classNames.bind(styles)

function Alert ({ type, msg, showAlert, playList }){
  console.log(playList)
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  },[]);
  return <p className={cx(`alert alert-${type}`, "container")}>{msg}</p>;
};

export default Alert;