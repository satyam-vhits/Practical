import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import params from '@config/params';
import {useCallback, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';
import {Alert} from '@components';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {AuthNavigationProps, AuthParams} from '@navigation/stackParams';
const useFileUpload = () => {
  const [fileUpload, setFileUpload] = useState<FileUploadProps>({
    documentUpload: '',
    userSelfie: '',
  });
  const route = useRoute<RouteProp<AuthParams, 'fileUpload'>>();
  const navigation = useNavigation<AuthNavigationProps>();
  const updateFileUpload = useCallback(
    (key: string, value: string | boolean | any) => {
      setFileUpload(prevState => ({...prevState, [key]: value}));
    },
    [fileUpload],
  );
  const uploadUserSelfie = () => {
    ImagePicker.openCamera({
      mediaType: 'photo',
      useFrontCamera: true,
    }).then(res => {
      let temp = {
        name: `${Date.now()}image.png`,
        uri: res.path,
        type: 'image/png',
      };
      updateFileUpload('userSelfie', res?.path);
      uploadFile('selfie', temp);
    });
  };

  const uploadUserDocument = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      useFrontCamera: true,
      cropping: false,
    }).then(res => {
      let temp = {
        name: `${Date.now()}image.png`,
        uri: res.path,
        type: 'image/png',
      };
      updateFileUpload('documentUpload', res?.path);
      uploadFile('document', temp);
      Alert.show({
        title: 'Details shared to the mail',
        onPress: () =>
          navigation.navigate('qrCode', {token: route?.params?.token}),
      });
    });
  };

  const uploadFile = async (type: 'selfie' | 'document', file: FileProps) => {
    try {
      const formData = new FormData();
      if (type == 'selfie') {
        formData.append(params.profile, file);
      } else {
        formData.append(params.document, file);
      }
      const {data} = await axiosInstance.post(constant.signup, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {}
  };

  return {fileUpload, uploadUserDocument, uploadUserSelfie};
};

export default useFileUpload;
