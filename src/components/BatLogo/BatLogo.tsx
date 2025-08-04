import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './BatLogoStyles';
import logo from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
            BAT PASS GENERATOR
        </Text>
        <Image style={styles.image} source={logo} />
    </>
  );
}