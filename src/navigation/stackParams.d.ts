import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthParams = {
  form: undefined;
  verifyOtp: {id?: number};
  fileUpload: {token?: string};
  qrCode: {token?: string};
};

export type HomeParams = {};

export type AuthNavigationProps = NativeStackNavigationProp<AuthParams>;

export type HomeNavigationProps = NativeStackNavigationProp<HomeStackParamList>;
