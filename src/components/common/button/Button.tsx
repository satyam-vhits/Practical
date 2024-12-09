import React, {memo} from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import {color} from '@theme/index';
import {propType} from './buttonProps';
import {style} from './button.style';
const Button: React.FC<propType> = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      disabled={props.disabled}
      style={[
        style.container,
        props.containerStyle,
        {
          backgroundColor: props.isActive ? color.disable : color.primary,
        },
      ]}
      {...props.buttonProps}>
      {props.isLoading ? (
        <ActivityIndicator
          size="small"
          color={color.white}
          style={style.indicatorStyle}
          {...props.activityProps}
        />
      ) : (
        <View style={style.nameDetailContainer}>
          <Text
            style={[
              style.nameStyle,
              props.nameTextStyle,
              {
                color: props.isActive ? color.black : color.white,
              },
            ]}>
            {props.name}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);
