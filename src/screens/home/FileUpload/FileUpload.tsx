import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useFileUpload from './useFileUpload';
import styles from './fileUpload.style';
const FileUpload = () => {
  const {fileUpload, uploadUserDocument, uploadUserSelfie} = useFileUpload();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selfieContainer}
        onPress={uploadUserSelfie}>
        {fileUpload.userSelfie != '' ? (
          <Image
            source={{uri: fileUpload.userSelfie}}
            style={styles.imageStyle}
          />
        ) : (
          <Text style={styles.uploadText}>+ Upload User Selfie</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.selfieContainer, {marginTop: 20}]}
        onPress={uploadUserDocument}>
        {fileUpload.documentUpload != '' ? (
          <Image
            source={{uri: fileUpload.documentUpload}}
            style={styles.imageStyle}
          />
        ) : (
          <Text style={styles.uploadText}>+ Upload Document</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FileUpload;
