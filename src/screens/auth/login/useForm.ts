import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import params from '@config/params';
import {AuthNavigationProps} from '@navigation/stackParams';
import {useNavigation} from '@react-navigation/native';
import {checkEmail, checkName} from '@utility/validation/validation';
import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useMemo, useState} from 'react';
import Snackbar from 'react-native-snackbar';

const useForm = () => {
  const navigation = useNavigation<AuthNavigationProps>();
  const [formState, setFormState] = useState<FormProps>({
    email: '',
    name: '',
    phoneNo: '',
    visitorName: '',
    error: {
      emailError: undefined,
      nameError: undefined,
      phoneError: undefined,
      visitorError: undefined,
    },
    isLoading: false,
  });

  const updateForm = useCallback(
    (key: string, value: string | boolean) => {
      setFormState(prevState => ({...prevState, [key]: value}));
    },
    [formState],
  );

  const isLogin = useMemo(
    () =>
      !formState.email ||
      !formState.name ||
      !formState.phoneNo ||
      !formState.visitorName,
    [formState],
  );
  const validate = () => {
    let isValidate = true;
    if (!checkName(formState.name)) {
      isValidate = false;
      formState.error.nameError = validationMessage.invalidName;
    } else {
      formState.error.nameError = '';
    }
    if (!checkEmail(formState.email)) {
      isValidate = false;
      formState.error.emailError = validationMessage.invalidEmail;
    } else {
      formState.error.emailError = '';
    }
    if (formState.phoneNo.length != 10) {
      isValidate = false;
      formState.error.phoneError = validationMessage.invalidPhoneNo;
    } else {
      formState.error.phoneError = '';
    }
    if (!checkName(formState.visitorName)) {
      isValidate = false;
      formState.error.visitorError = validationMessage.invalidVisitor;
    } else {
      formState.error.visitorError = '';
    }
    setFormState({...formState});
    if (isValidate) {
      submitApi();
    }
  };

  const submitApi = async () => {
    updateForm('isLoading', true);
    try {
      const formData = new FormData();
      formData.append(params.name, formState.name);
      formData.append(params.email, formState.email);
      formData.append(params.phoneNo, formState.phoneNo);
      formData.append(params.visitorPersonName, formState.visitorName);

      const {data} = await axiosInstance.post(constant.signup, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      updateForm('isLoading', false);
      console.log(data);
      if (data?.data) {
        navigation.navigate('verifyOtp', {id: data?.data?.id});
      }
    } catch (error: any) {
      updateForm('isLoading', false);
      console.log('error', error);
      Snackbar.show({text: error?.data?.message});
    }
  };

  return {isLogin, formState, updateForm, validate};
};

export default useForm;
