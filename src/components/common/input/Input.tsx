import React, {forwardRef, memo, useCallback, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import color from '@theme/color';
import style from './input.style';
import {InputProps} from './inputProps';
import font from '@theme/font';
import SvgIndex from '@svgIndex';

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  return (
    <View style={[style.mainContainer, props.mainContainerStyle]}>
      {props?.label && (
        <Text
          style={[style.labelStyle, props.labelStyle, {color: color.black}]}>
          {props?.label}
        </Text>
      )}
      <View
        style={[
          style.container,
          props.containerStyle,
          {
            backgroundColor: color.white,
            borderColor: color.silver,
          },
        ]}>
        <TextInput
          ref={ref}
          value={props.value}
          onChangeText={props.onChangeText}
          style={[style.input, props.inputStyle, {color: color.black}]}
          placeholder={props.placeholder}
          maxLength={props.maxLength}
          keyboardType={props.keyboardType}
          returnKeyType={props.returnKeyType}
          {...props.inputProps}
        />
      </View>
      {props.error && <Text style={style.error}>{props.error}</Text>}
    </View>
  );
});

export default memo(Input);
