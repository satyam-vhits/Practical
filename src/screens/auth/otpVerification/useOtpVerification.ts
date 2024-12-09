import validationMessage from '@utility/validation/validationMessage';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {UserOtpProps} from './otpVerificationProps';
import {axiosInstance} from '@api/api';
import constant from '@config/constant';
import params from '@config/params';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {AuthNavigationProps, AuthParams} from '@navigation/stackParams';
const useOtpVerification = () => {
  const inputRef = useRef<any>(null);
  const route = useRoute<RouteProp<AuthParams, 'verifyOtp'>>();
  const [timer, setTimer] = useState<number>(30);
  const [userOtp, setUserOtp] = useState<UserOtpProps>({
    OTP: '',
    isLoading: false,
    otpError: undefined,
  });
  const navigation = useNavigation<AuthNavigationProps>();

  useEffect(() => {
    resendCode();
  }, []);

  const updateForm = useCallback(
    (key: string, value: string | boolean) => {
      setUserOtp(prevState => ({...prevState, [key]: value}));
    },
    [userOtp],
  );

  const onResendOtp = () => {
    updateForm('OTP', '');
    onResendOtpCall();
    resendCode(true);
  };

  //** Resend Otp Code function */
  const resendCode = async (isResend?: boolean) => {
    updateForm('OTP', '');
    if (isResend) {
      setTimer(30);
    }
    let interval = setInterval(() => {
      setTimer((lastTimerCount: number) => {
        if (lastTimerCount <= 1) {
          setTimer(0);
          clearInterval(interval);
        }
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  };

  const validation = () => {
    verifyOTP();
  };

  const isEnable = useMemo(
    () => !userOtp.OTP || userOtp.OTP.length != 4,
    [userOtp],
  );

  //   /* API call for OTP verification */
  const verifyOTP = async () => {
    updateForm('isLoading', true);
    try {
      const formData = {
        [params.otp]: userOtp.OTP,
        [params.id]: route?.params?.id,
      };
      const {data} = await axiosInstance.post(constant.verifyOtp, formData);
      if (data) {
        updateForm('isLoading', false);
        navigation.navigate('fileUpload', {token: data?.data?.token});

        console.log('verify otp response', data);
      }
      // dispatch(loginSuccess(data?.data));
    } catch (error: any) {
      updateForm('isLoading', false);

      console.log('verify otp error', error?.data);
    }
  };
  /** Api call for Resend OTP */
  const onResendOtpCall = async () => {
    updateForm('OTP', '');
    try {
      const formData = {
        [params.id]: route?.params?.id,
      };
      const {data} = await axiosInstance.post(constant.resendOtp, formData);
    } catch (error: any) {}
  };

  return {
    validation,
    inputRef,
    userOtp,
    updateForm,
    timer,
    onResendOtp,
    isEnable,
  };
};

export default useOtpVerification;
