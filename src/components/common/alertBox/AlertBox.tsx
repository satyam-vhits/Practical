import {
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {FC, forwardRef, useImperativeHandle, useState} from 'react';
import {AlertBoxMethods, AlertBoxProps} from './alertBoxProps';
import styles from './alertBox.style';

const AlertBox = forwardRef<AlertBoxMethods, AlertBoxProps>(
  (
    {
      visible = false,
      title = '',
      description = '',
      cancelTitle = 'Cancel',
      confirmTitle = 'OK',
      onPressConfirm,
    }: AlertBoxProps,
    ref,
  ) => {
    const [visibleAlert, setVisibleAlert] = useState(visible);
    const [alertTitle, setAlertTitle] = useState(title);
    const [alertDescriptionDes, setAlertDescriptionDes] = useState(description);
    const [onPress, setOnPress] = useState<(() => void) | undefined>(
      onPressConfirm,
    );

    useImperativeHandle(ref, () => ({
      show({title, description, onPress}) {
        setVisibleAlert(true);
        setAlertTitle(title);
        setAlertDescriptionDes(description!);
        setOnPress(() => onPress);
      },
    }));

    return (
      <Modal
        visible={visibleAlert}
        style={styles.container}
        transparent={true}
        animationType={'fade'}>
        <TouchableOpacity
          style={styles.backDropped}
          onPress={() => setVisibleAlert(false)}
        />
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text
              style={[
                styles.title,
                {
                  paddingVertical: alertDescriptionDes ? 0 : 10,
                },
              ]}>
              {alertTitle}
            </Text>
            {alertDescriptionDes && (
              <Text style={styles.description}>{alertDescriptionDes}</Text>
            )}
            <View style={styles.rowContainer}>
              {/* <Pressable
                onPress={() => setVisibleAlert(false)}
                style={[
                  styles.buttonStyle,
                  {
                    borderRightWidth: StyleSheet.hairlineWidth,
                    borderColor: '#ccc',
                  },
                ]}>
                <Text style={styles.cancelButtonText}>{cancelTitle}</Text>
              </Pressable> */}
              <Pressable
                style={styles.buttonStyle}
                onPress={() => {
                  setVisibleAlert(false);
                  onPress?.();
                }}>
                <Text style={styles.deleteButtonText}>{confirmTitle}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
  },
);

export default AlertBox;
