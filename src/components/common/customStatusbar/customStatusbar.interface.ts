import {StatusBarProps, StyleProp, ViewStyle} from 'react-native';

export interface CustomStatusBarProps {
  backgroundColor?: string | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  transparent?: boolean;
  barStyle?: 'default' | 'dark-content' | 'light-content';
  hidden?: boolean | undefined;
  statusBarProps?: StatusBarProps;
}
