import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import color from '@theme/color';

const Spinner: React.FC<SpinnerProps> = ({visible}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.container}>
        <ActivityIndicator color={color.primary} size={'large'} />
      </View>
    </Modal>
  );
};

export default memo(Spinner);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.modalBackground,
  },
});
