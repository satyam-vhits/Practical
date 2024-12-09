import {Button, CustomStatusBar} from '@components';
import SvgIndex from '@svgIndex';
import color from '@theme/color';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import styles from './otpVerification.style';
import useOtpVerification from './useOtpVerification';
const OtpVerification: React.FC = () => {
  const {
    userOtp,
    updateForm,
    inputRef,
    timer,
    onResendOtp,
    validation,
    isEnable,
  } = useOtpVerification();

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollStyle}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.otpText}>OTP Verification</Text>
          <Text style={styles.otpSubText}>Please enter the OTP</Text>
          <View style={styles.otpInputContainer}>
            <CodeField
              ref={inputRef}
              value={userOtp.OTP}
              onChangeText={res => {
                updateForm('OTP', res);
                res?.length === 4 && Keyboard.dismiss();
              }}
              cellCount={4}
              keyboardType="number-pad"
              returnKeyType="done"
              textContentType="oneTimeCode"
              rootStyle={styles.rootStyle}
              onSubmitEditing={() => Keyboard.dismiss()}
              renderCell={({index, symbol, isFocused}) => (
                <View key={index} style={styles.otpView}>
                  <Text key={index} style={[styles.cell]}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </View>
              )}
            />
          </View>
          {userOtp.otpError && (
            <Text style={styles.otpErrorText}>{userOtp.otpError}</Text>
          )}
          <Text style={styles.resendText}>Didn't Recieve OTP ? </Text>
          {timer != 0 ? (
            <View>
              <Text allowFontScaling={false} style={styles.resendCodeText}>
                Resend in{' '}
                <Text style={styles.resendTimerText}>
                  00 : {timer < 10 ? '0' + timer : timer}
                </Text>
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.resendView}
              onPress={onResendOtp}>
              <Text allowFontScaling={false} style={styles.resendOtpText}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          )}
          <Button
            name="Verify"
            onPress={validation}
            isActive={isEnable}
            isLoading={userOtp.isLoading}
            disabled={!isEnable && userOtp.isLoading}
            containerStyle={styles.buttonStyle}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default OtpVerification;
