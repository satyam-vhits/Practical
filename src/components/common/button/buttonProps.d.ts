import {FC} from 'react';
import {
  ActivityIndicatorProps,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface propType {
  name?: string;
  containerStyle?: ViewStyle | undefined;
  isLoading?: boolean;
  activityProps?: ActivityIndicatorProps;
  nameTextStyle?: StyleProp<TextStyle> | undefined;
  onPress?: () => void;
  buttonProps?: TouchableOpacityProps;
  disabled?: boolean;
  activeOpacity?: number;
  isActive?: boolean;
}

export type ContentStyle = Omit<ViewStyle, 'backgroundColor'>;
