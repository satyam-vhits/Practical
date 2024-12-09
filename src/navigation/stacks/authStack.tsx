import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screenName from '@navigation/screenName';
import Form from '@screens/auth/login/Form';
import OtpVerification from '@screens/auth/otpVerification/OtpVerification';
import FileUpload from '@screens/home/FileUpload/FileUpload';
import QrCode from '@screens/home/QrCode/QrCode';

const Stack = createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenName.form}
        component={Form}
        options={{
          headerShown: true,
          headerTitle: 'Form',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screenName.verifyOtp}
        component={OtpVerification}
        options={{
          headerShown: true,
          headerTitle: 'Verify OTP',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screenName.fileUpload}
        component={FileUpload}
        options={{
          headerShown: true,
          headerTitle: 'File Upload',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={screenName.qrCode}
        component={QrCode}
        options={{
          headerShown: true,
          headerTitle: 'QR Code',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
