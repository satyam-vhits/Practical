import {StyleSheet} from 'react-native';
import {color, font} from '@theme/index';

const styles = StyleSheet.create({
  buttonStyle: {marginHorizontal: 20, marginTop: 20},
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  buttonContent: {
    marginTop: 60,
    marginHorizontal: 20,
  },
  header: {
    padding: 10,
    alignSelf: 'flex-start',
  },
  otpText: {
    fontSize: 18,
    color: color.black,

    textAlign: 'center',
    lineHeight: 25,
    fontWeight: '600',
  },
  otpSubText: {
    fontSize: 12,
    color: color.silver,

    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 20,
    lineHeight: 17,
    fontWeight: '400',
  },
  otpInputContainer: {
    marginHorizontal: 18,
    marginVertical: 56,
  },
  otpView: {
    width: 54,
    height: 61,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.silver,
  },
  cell: {
    fontSize: 20,
    color: color.black,
  },
  scrollStyle: {
    flexGrow: 1,
    paddingBottom: 30,
    justifyContent: 'center',
  },
  rootStyle: {
    marginHorizontal: 30,
  },
  resendText: {
    fontSize: 12,
    lineHeight: 17,
    color: color.black,
    textAlign: 'center',
    fontWeight: '500',
  },
  resendCodeText: {
    fontSize: 12,
    lineHeight: 17,
    color: color.silver,
    fontWeight: '500',

    textAlign: 'center',
  },
  resendTimerText: {
    fontSize: 12,
    color: color.primary,

    textAlign: 'center',
  },
  resendOtpText: {
    fontSize: 14,
    lineHeight: 18,
    color: color.primary,

    textAlign: 'center',
    marginLeft: 10,
  },
  resendView: {
    flexDirection: 'row',
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpErrorText: {
    color: color.danger,

    marginLeft: 10,
    marginTop: 5,
  },
});
export default styles;
