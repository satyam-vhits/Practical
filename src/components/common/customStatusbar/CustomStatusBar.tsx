import React, {memo} from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {color} from '../../../theme';
import {CustomStatusBarProps} from './customStatusbar.interface';

const CustomStatusbar: React.FC<CustomStatusBarProps> = props => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          height: insets.top,
          backgroundColor: props.backgroundColor ?? color.primary,
        },
        props?.containerStyle,
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={color.primary}
        translucent={props.transparent}
        hidden={props.hidden}
        {...props}
      />
    </View>
  );
};
export default memo(CustomStatusbar);
