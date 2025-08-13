import React from 'react';
import { View, Text, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles, Colors } from './styles';
import { ComponentProps } from 'react';

type IoniconName = ComponentProps<typeof Ionicons>['name'];

type MyTextInputBaseProps = {
  label: string;
  icon: IoniconName;
} & TextInputProps;

type MyTextInputPasswordProps = MyTextInputBaseProps & {
  isPassword: true;
  hidePassword: boolean;
  setHidePassword: (value: boolean) => void;
};

type MyTextInputNormalProps = MyTextInputBaseProps & {
  isPassword?: false;
  hidePassword?: never;
  setHidePassword?: never;
};

export type MyTextInputProps = MyTextInputPasswordProps | MyTextInputNormalProps;

const CustomTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}: MyTextInputProps) => {
  return (
    <View>
      <View style={styles.leftIcon}>
        <Ionicons name={icon} size={30} color={Colors.brand} />
      </View>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        {...props}
      />
      {isPassword && setHidePassword && hidePassword !== undefined && (
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={() => setHidePassword(!hidePassword)}
          activeOpacity={0.7}
        >
          <Ionicons
            name={hidePassword ? 'eye-off' : 'eye'}
            size={30}
            color={Colors.darkLight}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomTextInput;
