import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as ClipBoard from 'expo-clipboard'

export function BatButton() {
    const [pass, setPass] = useState('')

    function handleGenerateButton() {
        setPass(generatePass());
    }

    function handleCopyButton() {
        ClipBoard.setStringAsync(pass);
    }

    return (
    <>
        <BatTextInput pass={pass} />

        <Pressable
        style={styles.button}
        onPress={handleGenerateButton}
        >
           <Text style={styles.text}>GENERATE</Text>
        </Pressable>

        <Pressable
        style={styles.button}
        onPress={handleCopyButton}
        >
           <Text style={styles.text}>⚡COPY</Text>
        </Pressable>
    </>
  );
}