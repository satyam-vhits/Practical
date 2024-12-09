import {Button, CustomStatusBar, Input} from '@components';
import React from 'react';
import {View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import styles from './form.style';
import useForm from './useForm';
const Form: React.FC = () => {
  const {formState, isLogin, updateForm, validate} = useForm();
  return (
    <View style={styles.container}>
      <CustomStatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Input
            placeholder="Enter Name"
            value={formState.name}
            label="Name"
            onChangeText={(text: string) =>
              updateForm('name', text.trimStart())
            }
            error={formState.error.nameError}
          />
          <Input
            placeholder="Enter Email"
            value={formState.email}
            label="Email"
            onChangeText={(text: string) => updateForm('email', text.trim())}
            error={formState.error.emailError}
          />
          <Input
            placeholder="Enter Phone"
            value={formState.phoneNo}
            label="Phone"
            maxLength={10}
            inputProps={{keyboardType: 'numeric'}}
            onChangeText={(text: string) => updateForm('phoneNo', text.trim())}
            error={formState.error.phoneError}
          />
          <Input
            placeholder="Enter Visitor Person Name"
            value={formState.visitorName}
            label="Visitor Person Name"
            onChangeText={(text: string) =>
              updateForm('visitorName', text.trimStart())
            }
            error={formState.error.visitorError}
          />
          <Button
            name="Submit"
            isActive={isLogin}
            disabled={!isLogin && formState.isLoading}
            isLoading={formState.isLoading}
            onPress={validate}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Form;
