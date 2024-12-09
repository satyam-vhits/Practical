import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import color from '@theme/color';
import QRCode from 'react-native-qrcode-svg';
import useQrCode from './useQrCode';

const QrCode = () => {
  const {} = useQrCode();
  return (
    <View style={styles.container}>
      <QRCode
        value={JSON.stringify({
          name: 'Satyam',
          email: 'satyam@yopmail.com',
          phone: '9909922417',
          visitor: 'Test',
        })}
        size={200}
      />
    </View>
  );
};

export default QrCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
