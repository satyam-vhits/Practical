import {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
  KeyboardType,
  ReturnKeyType,
  TextInput,
} from 'react-native';

export interface InputProps {
  value: string | undefined;
  onChangeText?: (value: string) => void;
  placeholder: string;
  mainContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputProps?: TextInputProps;
  error?: string | null;
  rightIcon?: React.ComponentType;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  hidePassword?: boolean;
  secureText?: boolean;
  maxLength?: number;
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyType;
  ref?: TextInput | undefined;
  isSearch?: boolean;
}
